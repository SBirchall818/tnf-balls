import React from 'react';
import { css } from 'aphrodite';
import PropTypes from 'prop-types';
import styles from './window-styles';
import random from './random';
import Ball from '../ball/Ball';
import BallView from '../ball/BallView';
import iterateBallArray from './iterateBallArray';
import { TICK_MS, RANDOM_RANGE } from './settings';
import { NEW_MODE, REPLAY_MODE } from '../../consts/modes';

export const RESIZE = 'resize';

class Window extends React.Component {
  constructor(props) {
    super(props);
    const { replayBalls } = props;
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      balls: [],
      replayBalls,
    };

    console.log('replayBalls: ', replayBalls);

    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
    this.replayTick = this.replayTick.bind(this);
  }

  componentDidMount() {
    this.handleSizeChange();
    window.addEventListener(RESIZE, this.handleSizeChange);
    const intervalRef = setInterval(this.tick, TICK_MS);
    this.setState({ intervalRef });

    const { mode } = this.props;
    if (mode === REPLAY_MODE) {
      const replayIntervalRef = setInterval(this.replayTick, TICK_MS);
      this.setState({ replayIntervalRef, startReplayTimestamp: Date.now() });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(RESIZE, this.handleSizeChange);
    const { intervalRef, replayIntervalRef } = this.state;
    clearInterval(intervalRef);
    if (replayIntervalRef) clearInterval(replayIntervalRef);
  }

  handleSizeChange() {
    this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
  }

  handleClick(e) {
    e.preventDefault();
    const { mode } = this.props;
    if (mode !== NEW_MODE) return;

    const { x, y } = e.nativeEvent;
    const { windowHeight, balls } = this.state;
    const h = windowHeight - y;

    const randomVelX = random(RANDOM_RANGE);
    const randomVelH = random(RANDOM_RANGE);
    const ball = new Ball({ x, y, h }, { x: randomVelX, h: randomVelH });
    this.setState({ balls: balls.concat(ball) });

    // Set start time
    const now = Date.now();
    let time;
    const { startTime } = this.state;
    if (!startTime) {
      this.setState({ startTime: now });
      time = 0;
    } else {
      time = now - startTime;
    }
    const ballToSave = {
      x: ball.pos.x,
      h: ball.pos.h,
      velX: Math.floor(ball.vel.x),
      velH: Math.floor(ball.vel.h),
      time,
    };
    const { saveBall } = this.props;
    saveBall(ballToSave);
  }

  tick() {
    const { balls, windowWidth, windowHeight } = this.state;
    const ballArrayNextState = iterateBallArray(balls, windowWidth, windowHeight);
    this.setState({ balls: ballArrayNextState });
  }

  replayTick() {
    const {
      startReplayTimestamp, replayBalls, replayIntervalRef, windowHeight, balls,
    } = this.state;
    const diffMs = Date.now() - startReplayTimestamp;
    if (replayBalls.length === 0) {
      clearInterval(replayIntervalRef);
      this.setState({ replayIntervalRef: undefined });
      const { finishReplay } = this.props;
      finishReplay();
      return;
    }

    const lastIndex = replayBalls.length - 1;
    const b = replayBalls[lastIndex];
    if (b.time < diffMs) {
      const y = windowHeight - b.h;
      const ball = new Ball({ x: b.x, y, h: b.h }, { x: b.velX, h: b.velH });
      this.setState({ balls: balls.concat(ball), replayBalls: replayBalls.slice(0, lastIndex) });
    }
  }

  render() {
    const { balls, windowWidth, windowHeight } = this.state;
    const ballList = balls.map(b => <BallView key={b.key} x={b.pos.x} y={b.pos.y} />);
    return (
      <div
        onClick={this.handleClick}
        className={css(styles.root)}
        style={{ height: windowHeight, width: windowWidth }}
      >
        {ballList}
      </div>
    );
  }
}

Window.propTypes = {
  replayBalls: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  saveBall: PropTypes.func.isRequired,
  finishReplay: PropTypes.func.isRequired,
};

export default Window;
