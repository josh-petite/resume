import { Component, OnInit } from 'angular2/core';
import { TweetService } from './tweet.service';
import { Tweet } from './../common/models/tweet.model';

@Component({
    selector: 'twitter-feed',
    templateUrl: 'src/twitter-feed/view.html'
})

export class TwitterFeedComponent {
    private tweets: Tweet[];
    
    constructor(private _tweetService: TweetService) {        
    }
    
    ngOnInit() {
        this.getTimeline()
    }
    
    getTimeline() {
        this.tweets = this._tweetService.getTimeline();
    }
}