import express from 'express';

export default (app) => {
  app.use(express.static('dist'));
};
