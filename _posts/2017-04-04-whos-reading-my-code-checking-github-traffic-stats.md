---
id: 501
title: 'Who&#8217;s Reading My Code?: Checking GitHub Traffic Stats'
date: 2017-04-04T17:46:06-04:00
author: nc
layout: post
guid: https://nielchah.com/?p=501
permalink: /blog/whos-reading-my-code-checking-github-traffic-stats/
tc-thumb-fld:
  - 'a:2:{s:9:"_thumb_id";i:505;s:11:"_thumb_type";s:10:"attachment";}'
layout_key:
  - ""
post_slider_check_key:
  - "0"
categories:
  - API
  - command line
  - python
---
**GitHub**: <span style="color: #0000ff;"><strong><a style="color: #0000ff;" href="https://github.com/nchah/github-traffic-stats">nchah/github-traffic-stats</a></strong></span>

<p style="text-align: left;">
  Whenever I navigate to github.com, I&#8217;m met with my profile&#8217;s feed of recent activity. It&#8217;s nice to see the occasional &#8220;[user] {starred/forked} [repo]&#8221; message for my own code.<img class="alignnone wp-image-505 size-large" src="https://nielchah.com/wp-content/uploads/2017/04/github-feed-1024x429.png" alt="" width="1024" height="429" srcset="https://nielchah.com/wp-content/uploads/2017/04/github-feed-1024x429.png 1024w, https://nielchah.com/wp-content/uploads/2017/04/github-feed-300x126.png 300w, https://nielchah.com/wp-content/uploads/2017/04/github-feed-768x321.png 768w, https://nielchah.com/wp-content/uploads/2017/04/github-feed.png 1338w" sizes="(max-width: 1024px) 100vw, 1024px" />
</p>

To check the actual traffic to my repositories, I also run my **<a style="color: #0000ff;" href="https://github.com/nchah/github-traffic-stats">github-traffic-stats</a>** script from time to time. It only provides the most basic metrics (unique views and visitors), but it can be helpful to see what other programmers out there may be searching, and finding in my own code.

A sample of the output to a repo that&#8217;s been getting a lot of traffic recently:

<pre>$ python3 python/github-traffic-stats.py nchah ALL save_csv
...
movielens-recommender
Date        Views  Unique visitors
Totals      311    106
2017-04-10  24     5
2017-04-11  32     7
2017-04-12  32     9
2017-04-13  19     8
2017-04-14  7      5
2017-04-15  25     9
2017-04-16  16     7
2017-04-17  17     6
2017-04-18  14     9
2017-04-19  35     11
2017-04-20  27     8
2017-04-21  40     10
2017-04-22  9      9
2017-04-23  14     6

</pre>