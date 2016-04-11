import { Injectable } from 'angular2/core';
import { Tweet } from './../common/models/tweet.model';

@Injectable()
export class TweetService {
    getTimeline() : Tweet[] {
        return new Array<Tweet>();
    }
}