import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 11576,
  title: 'per fetch',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-07-25T10:59'),
};

export const sampleWithPartialData: IPost = {
  id: 3965,
  title: 'tingle',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-07-25T09:06'),
};

export const sampleWithFullData: IPost = {
  id: 13560,
  title: 'shakily',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-07-25T15:36'),
};

export const sampleWithNewData: NewPost = {
  title: 'yell upon since',
  content: '../fake-data/blob/hipster.txt',
  date: dayjs('2024-07-25T19:35'),
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
