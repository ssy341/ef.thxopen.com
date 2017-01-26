---
layout: post
title:  Milestones · Talking about school days
categories: f2f
author: Keith Shan
pic: images/pic11.jpg
container: subject_container
script: >
    <script src="/assets/js/common.js"></script>
    <script src="/assets/laytpl/laytpl.js"></script>
    <script type="text/html" id="subjecttpl">
        <ul>
            {{# for(var i = 0 ; i < d.length; i++ ){ }}
            <li>
                <b>{{ d[i].word }}</b>  /{{ d[i].ipa }}/  {{ d[i].desc }}
                {{# if(d[i].extra){ }}
                <dl>
                    {{ d[i].extra }}
                </dl>
                {{# } }}
            </li>
            {{# } }}
        </ul>    
    </script>
    <script>
        $(function(){
           efajax("/data/subject.txt",function(data){
                var final = messUp(data.data);
                var html = $("#subjecttpl").html();
                laytpl(html).render(final,function(result){
                    $("#subject_container").append(result);
                })
            })
        })
    </script>
---

By the end of this lesson, you will be able to talk about your school days.

读书的时候你最擅长什么？最糟糕的是什么？都有些什么学科呢？你最擅长什么呢？

<!--more-->

 - Science
 - Languages
 - Music
 - Drawing
 - Sports
    - Football
    - Badminton
 - Dancing
 - Chemistry
 - Math
 - History
 
 
### Related Phrase

#### good
 
  - excellent at
  - great at
  - I liked ...

#### bed
 
 - terrible at
 - really bad at
 - wasn't very good at
 - I didn't like ...
 - I wasn't very good at math **or** dance.
 

想知道我擅长什么，不擅长什么吗？答案在例句里哦~~

### Related Sentence


- I was good/bad at ...
    - I was good at PE.
- I was excellent/great at ...
    - I was excellent at play.

- I was terrible at ...
    - I was terrible at math.
- I was really bad at ...
- I wasn't very good at ... 

- Were you good at ...
    - Were you good at Music?
- What were you good at?
- What were you not so good at?

### Related Words

- major /'medʒɚ/ 主修
- minor /'maɪnɚ/ 辅修
- racecar /'reis,kɑ:/ n. 赛车
- report card 成绩单
- marbles /'mɑrbl/ 
    - n. 大理石；大理石制品；弹珠
    - adj. 大理石的；冷酷无情的


#### 看看下面这些学科你都知道么？ **↓↓↓** 底部有彩蛋 ……


{% include div.html id=page.container %}


##### 国外的评分是用 A B C D F 来打分的，奇怪的是为什么没有 E 呢？你知道么？