var Poll={version:"0.3",start:function(a){action=a.action;a.internal_action=a.action;a.action=function(){Poll.util.attempts(a.name,a.internal_action)};if(a.start){if(a.interval){if(a.increment){Poll.timers[a.name]={type:"timeout",config:a,attempts:0,value:setTimeout(function(){Poll.util.timeout(a.name,a.action,a.interval)},a.start)}}else{Poll.timers[a.name]={type:"timeout",config:a,attempts:0,value:setTimeout(function(){a.action();Poll.timers[a.name]["value"]=setInterval(a.action,a.interval);Poll.timers[a.name]["type"]="interval"},a.start)}}}else{Poll.timers[a.name]={type:"timeout",config:a,attempts:0,value:setTimeout(a.action,a.start)}}}else if(a.interval){if(a.increment){Poll.timers[a.name]={type:"interval",config:a,attempts:0,value:setTimeout(function(){Poll.util.timeout(a.name,a.action,a.interval+a.increment)},a.interval)}}else{Poll.timers[a.name]={type:"interval",config:a,attempts:0,value:setInterval(a.action,a.interval)}}}else{throw"PollJS: You need to define a start, an interval, or both."}},util:{attempts:function(a,b){var c,d=Poll.timers[a];Poll.timers[a].attempts+=1;c=b();if(c===false){Poll.stop(a)}if(d.config.attempts){if(d.attempts==d.config.attempts){Poll.stop(a);d.config.fallback()}}},timeout:function(a,b,c){var d,e=Poll.timers[a].config;d=c+(e.increment||0);Poll.timers[a].value=setTimeout(function(){Poll.util.timeout(e.name,b,d)},d);Poll.timers[a].type="timeout";b()}},stop:function(a){var b=Poll.timers[a];if(b.type=="interval"){clearInterval(b.value)}else{clearTimeout(b.value)}},timers:{}}