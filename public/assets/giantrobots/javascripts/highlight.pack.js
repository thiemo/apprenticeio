var hljs=new function(){function m(p){return p.replace(/&/gm,"&amp;").replace(/</gm,"&lt;")}function c(r,q,p){return RegExp(q,"m"+(r.cI?"i":"")+(p?"g":""))}function j(r){for(var p=0;p<r.childNodes.length;p++){var q=r.childNodes[p];if(q.nodeName=="CODE"){return q}if(!(q.nodeType==3&&q.nodeValue.match(/\s+/))){break}}}function g(t,s){var r="";for(var q=0;q<t.childNodes.length;q++){if(t.childNodes[q].nodeType==3){var p=t.childNodes[q].nodeValue;if(s){p=p.replace(/\n/g,"")}r+=p}else{if(t.childNodes[q].nodeName=="BR"){r+="\n"}else{r+=g(t.childNodes[q])}}}if(/MSIE [678]/.test(navigator.userAgent)){r=r.replace(/\r/g,"\n")}return r}function a(s){var q=s.className.split(/\s+/);q=q.concat(s.parentNode.className.split(/\s+/));for(var p=0;p<q.length;p++){var r=q[p].replace(/^language-/,"");if(d[r]||r=="no-highlight"){return r}}}function b(p){var q=[];(function(s,t){for(var r=0;r<s.childNodes.length;r++){if(s.childNodes[r].nodeType==3){t+=s.childNodes[r].nodeValue.length}else{if(s.childNodes[r].nodeName=="BR"){t+=1}else{q.push({event:"start",offset:t,node:s.childNodes[r]});t=arguments.callee(s.childNodes[r],t);q.push({event:"stop",offset:t,node:s.childNodes[r]})}}}return t})(p,0);return q}function l(y,z,x){var r=0;var w="";var t=[];function u(){if(y.length&&z.length){if(y[0].offset!=z[0].offset){return(y[0].offset<z[0].offset)?y:z}else{return z[0].event=="start"?y:z}}else{return y.length?y:z}}function s(C){var D="<"+C.nodeName.toLowerCase();for(var A=0;A<C.attributes.length;A++){var B=C.attributes[A];D+=" "+B.nodeName.toLowerCase();if(B.nodeValue!=undefined&&B.nodeValue!=false&&B.nodeValue!=null){D+='="'+m(B.nodeValue)+'"'}}return D+">"}while(y.length||z.length){var v=u().splice(0,1)[0];w+=m(x.substr(r,v.offset-r));r=v.offset;if(v.event=="start"){w+=s(v.node);t.push(v.node)}else{if(v.event=="stop"){var q=t.length;do{q--;var p=t[q];w+=("</"+p.nodeName.toLowerCase()+">")}while(p!=v.node);t.splice(q,1);while(q<t.length){w+=s(t[q]);q++}}}}w+=x.substr(r);return w}function i(){function p(u,t,v){if(u.compiled){return}if(!v){u.bR=c(t,u.b?u.b:"\\B|\\b");if(!u.e&&!u.eW){u.e="\\B|\\b"}if(u.e){u.eR=c(t,u.e)}}if(u.i){u.iR=c(t,u.i)}if(u.r==undefined){u.r=1}if(u.k){u.lR=c(t,u.l||hljs.IR,true)}for(var s in u.k){if(!u.k.hasOwnProperty(s)){continue}if(u.k[s] instanceof Object){u.kG=u.k}else{u.kG={keyword:u.k}}break}if(!u.c){u.c=[]}u.compiled=true;for(var r=0;r<u.c.length;r++){p(u.c[r],t,false)}if(u.starts){p(u.starts,t,false)}}for(var q in d){if(!d.hasOwnProperty(q)){continue}p(d[q].dM,d[q],true)}}function e(J,D){if(!i.called){i();i.called=true}function z(r,M){for(var L=0;L<M.c.length;L++){if(M.c[L].bR.test(r)){return M.c[L]}}}function w(L,r){if(C[L].e&&C[L].eR.test(r)){return 1}if(C[L].eW){var M=w(L-1,r);return M?M+1:0}return 0}function x(r,L){return L.iR&&L.iR.test(r)}function A(O,N){var M=[];for(var L=0;L<O.c.length;L++){M.push(O.c[L].b)}var r=C.length-1;do{if(C[r].e){M.push(C[r].e)}r--}while(C[r+1].eW);if(O.i){M.push(O.i)}return c(N,"("+M.join("|")+")",true)}function s(M,L){var N=C[C.length-1];if(!N.t){N.t=A(N,H)}N.t.lastIndex=L;var r=N.t.exec(M);if(r){return[M.substr(L,r.index-L),r[0],false]}else{return[M.substr(L),"",true]}}function p(O,r){var L=H.cI?r[0].toLowerCase():r[0];for(var N in O.kG){if(!O.kG.hasOwnProperty(N)){continue}var M=O.kG[N].hasOwnProperty(L);if(M){return[N,M]}}return false}function F(M,O){if(!O.k){return m(M)}var N="";var P=0;O.lR.lastIndex=0;var L=O.lR.exec(M);while(L){N+=m(M.substr(P,L.index-P));var r=p(O,L);if(r){t+=r[1];N+='<span class="'+r[0]+'">'+m(L[0])+"</span>"}else{N+=m(L[0])}P=O.lR.lastIndex;L=O.lR.exec(M)}N+=m(M.substr(P,M.length-P));return N}function K(r,M){if(M.sL&&d[M.sL]){var L=e(M.sL,r);t+=L.keyword_count;return L.value}else{return F(r,M)}}function I(M,r){var L=M.cN?'<span class="'+M.cN+'">':"";if(M.rB){q+=L;M.buffer=""}else{if(M.eB){q+=m(r)+L;M.buffer=""}else{q+=L;M.buffer=r}}C.push(M);B+=M.r}function E(O,L,Q){var R=C[C.length-1];if(Q){q+=K(R.buffer+O,R);return false}var M=z(L,R);if(M){q+=K(R.buffer+O,R);I(M,L);return M.rB}var r=w(C.length-1,L);if(r){var N=R.cN?"</span>":"";if(R.rE){q+=K(R.buffer+O,R)+N}else{if(R.eE){q+=K(R.buffer+O,R)+N+m(L)}else{q+=K(R.buffer+O+L,R)+N}}while(r>1){N=C[C.length-2].cN?"</span>":"";q+=N;r--;C.length--}var P=C[C.length-1];C.length--;C[C.length-1].buffer="";if(P.starts){I(P.starts,"")}return R.rE}if(x(L,R)){throw"Illegal"}}var H=d[J];var C=[H.dM];var B=0;var t=0;var q="";try{var v=0;H.dM.buffer="";do{var y=s(D,v);var u=E(y[0],y[1],y[2]);v+=y[0].length;if(!u){v+=y[1].length}}while(!y[2]);if(C.length>1){throw"Illegal"}return{r:B,keyword_count:t,value:q}}catch(G){if(G=="Illegal"){return{r:0,keyword_count:0,value:m(D)}}else{throw G}}}function f(t){var r={keyword_count:0,r:0,value:m(t)};var q=r;for(var p in d){if(!d.hasOwnProperty(p)){continue}var s=e(p,t);s.language=p;if(s.keyword_count+s.r>q.keyword_count+q.r){q=s}if(s.keyword_count+s.r>r.keyword_count+r.r){q=r;r=s}}if(q.language){r.second_best=q}return r}function h(r,q,p){if(q){r=r.replace(/^((<[^>]+>|\t)+)/gm,function(t,w,v,u){return w.replace(/\t/g,q)})}if(p){r=r.replace(/\n/g,"<br>")}return r}function o(u,x,q){var y=g(u,q);var s=a(u);if(s=="no-highlight"){return}if(s){var w=e(s,y)}else{var w=f(y);s=w.language}var p=b(u);if(p.length){var r=document.createElement("pre");r.innerHTML=w.value;w.value=l(p,b(r),y)}w.value=h(w.value,x,q);var t=u.className;if(!t.match("(\\s|^)(language-)?"+s+"(\\s|$)")){t=t?(t+" "+s):s}if(/MSIE [678]/.test(navigator.userAgent)&&u.tagName=="CODE"&&u.parentNode.tagName=="PRE"){var r=u.parentNode;var v=document.createElement("div");v.innerHTML="<pre><code>"+w.value+"</code></pre>";u=v.firstChild.firstChild;v.firstChild.cN=r.cN;r.parentNode.replaceChild(v.firstChild,r)}else{u.innerHTML=w.value}u.className=t;u.result={language:s,kw:w.keyword_count,re:w.r};if(w.second_best){u.second_best={language:w.second_best.language,kw:w.second_best.keyword_count,re:w.second_best.r}}}function k(){if(k.called){return}k.called=true;var r=document.getElementsByTagName("pre");for(var p=0;p<r.length;p++){var q=j(r[p]);if(q){o(q,hljs.tabReplace)}}}function n(){if(window.addEventListener){window.addEventListener("DOMContentLoaded",k,false);window.addEventListener("load",k,false)}else{if(window.attachEvent){window.attachEvent("onload",k)}else{window.onload=k}}}var d={};this.LANGUAGES=d;this.highlight=e;this.highlightAuto=f;this.fixMarkup=h;this.highlightBlock=o;this.initHighlighting=k;this.initHighlightingOnLoad=n;this.IR="[a-zA-Z][a-zA-Z0-9_]*";this.UIR="[a-zA-Z_][a-zA-Z0-9_]*";this.NR="\\b\\d+(\\.\\d+)?";this.CNR="\\b(0x[A-Za-z0-9]+|\\d+(\\.\\d+)?)";this.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|\\.|-|-=|/|/=|:|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";this.BE={b:"\\\\.",r:0};this.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[this.BE],r:0};this.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[this.BE],r:0};this.CLCM={cN:"comment",b:"//",e:"$"};this.CBLCLM={cN:"comment",b:"/\\*",e:"\\*/"};this.HCM={cN:"comment",b:"#",e:"$"};this.NM={cN:"number",b:this.NR,r:0};this.CNM={cN:"number",b:this.CNR,r:0};this.inherit=function(p,s){var r={};for(var q in p){r[q]=p[q]}if(s){for(var q in s){r[q]=s[q]}}return r}}();hljs.LANGUAGES.ruby=function(){var g="[a-zA-Z_][a-zA-Z0-9_]*(\\!|\\?)?";var a="[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?";var n={keyword:{and:1,"false":1,then:1,defined:1,module:1,"in":1,"return":1,redo:1,"if":1,BEGIN:1,retry:1,end:1,"for":1,"true":1,self:1,when:1,next:1,until:1,"do":1,begin:1,unless:1,END:1,rescue:1,nil:1,"else":1,"break":1,undef:1,not:1,"super":1,"class":1,"case":1,require:1,yield:1,alias:1,"while":1,ensure:1,elsif:1,or:1,def:1},keymethods:{__id__:1,__send__:1,abort:1,abs:1,"all?":1,allocate:1,ancestors:1,"any?":1,arity:1,assoc:1,at:1,at_exit:1,autoload:1,"autoload?":1,"between?":1,binding:1,binmode:1,"block_given?":1,call:1,callcc:1,caller:1,capitalize:1,"capitalize!":1,casecmp:1,"catch":1,ceil:1,center:1,chomp:1,"chomp!":1,chop:1,"chop!":1,chr:1,"class":1,class_eval:1,"class_variable_defined?":1,class_variables:1,clear:1,clone:1,close:1,close_read:1,close_write:1,"closed?":1,coerce:1,collect:1,"collect!":1,compact:1,"compact!":1,concat:1,"const_defined?":1,const_get:1,const_missing:1,const_set:1,constants:1,count:1,crypt:1,"default":1,default_proc:1,"delete":1,"delete!":1,delete_at:1,delete_if:1,detect:1,display:1,div:1,divmod:1,downcase:1,"downcase!":1,downto:1,dump:1,dup:1,each:1,each_byte:1,each_index:1,each_key:1,each_line:1,each_pair:1,each_value:1,each_with_index:1,"empty?":1,entries:1,eof:1,"eof?":1,"eql?":1,"equal?":1,"eval":1,exec:1,exit:1,"exit!":1,extend:1,fail:1,fcntl:1,fetch:1,fileno:1,fill:1,find:1,find_all:1,first:1,flatten:1,"flatten!":1,floor:1,flush:1,for_fd:1,foreach:1,fork:1,format:1,freeze:1,"frozen?":1,fsync:1,getc:1,gets:1,global_variables:1,grep:1,gsub:1,"gsub!":1,"has_key?":1,"has_value?":1,hash:1,hex:1,id:1,include:1,"include?":1,included_modules:1,index:1,indexes:1,indices:1,induced_from:1,inject:1,insert:1,inspect:1,instance_eval:1,instance_method:1,instance_methods:1,"instance_of?":1,"instance_variable_defined?":1,instance_variable_get:1,instance_variable_set:1,instance_variables:1,"integer?":1,intern:1,invert:1,ioctl:1,"is_a?":1,isatty:1,"iterator?":1,join:1,"key?":1,keys:1,"kind_of?":1,lambda:1,last:1,length:1,lineno:1,ljust:1,load:1,local_variables:1,loop:1,lstrip:1,"lstrip!":1,map:1,"map!":1,match:1,max:1,"member?":1,merge:1,"merge!":1,method:1,"method_defined?":1,method_missing:1,methods:1,min:1,module_eval:1,modulo:1,name:1,nesting:1,"new":1,next:1,"next!":1,"nil?":1,nitems:1,"nonzero?":1,object_id:1,oct:1,open:1,pack:1,partition:1,pid:1,pipe:1,pop:1,popen:1,pos:1,prec:1,prec_f:1,prec_i:1,print:1,printf:1,private_class_method:1,private_instance_methods:1,"private_method_defined?":1,private_methods:1,proc:1,protected_instance_methods:1,"protected_method_defined?":1,protected_methods:1,public_class_method:1,public_instance_methods:1,"public_method_defined?":1,public_methods:1,push:1,putc:1,puts:1,quo:1,raise:1,rand:1,rassoc:1,read:1,read_nonblock:1,readchar:1,readline:1,readlines:1,readpartial:1,rehash:1,reject:1,"reject!":1,remainder:1,reopen:1,replace:1,require:1,"respond_to?":1,reverse:1,"reverse!":1,reverse_each:1,rewind:1,rindex:1,rjust:1,round:1,rstrip:1,"rstrip!":1,scan:1,seek:1,select:1,send:1,set_trace_func:1,shift:1,singleton_method_added:1,singleton_methods:1,size:1,sleep:1,slice:1,"slice!":1,sort:1,"sort!":1,sort_by:1,split:1,sprintf:1,squeeze:1,"squeeze!":1,srand:1,stat:1,step:1,store:1,strip:1,"strip!":1,sub:1,"sub!":1,succ:1,"succ!":1,sum:1,superclass:1,swapcase:1,"swapcase!":1,sync:1,syscall:1,sysopen:1,sysread:1,sysseek:1,system:1,syswrite:1,taint:1,"tainted?":1,tell:1,test:1,"throw":1,times:1,to_a:1,to_ary:1,to_f:1,to_hash:1,to_i:1,to_int:1,to_io:1,to_proc:1,to_s:1,to_str:1,to_sym:1,tr:1,"tr!":1,tr_s:1,"tr_s!":1,trace_var:1,transpose:1,trap:1,truncate:1,"tty?":1,type:1,ungetc:1,uniq:1,"uniq!":1,unpack:1,unshift:1,untaint:1,untrace_var:1,upcase:1,"upcase!":1,update:1,upto:1,"value?":1,values:1,values_at:1,warn:1,write:1,write_nonblock:1,"zero?":1,zip:1}};var h={cN:"yardoctag",b:"@[A-Za-z]+"};var d={cN:"comment",b:"#",e:"$",c:[h]};var c={cN:"comment",b:"^\\=begin",e:"^\\=end",c:[h],r:10};var b={cN:"comment",b:"^__END__",e:"\\n$"};var u={cN:"subst",b:"#\\{",e:"}",l:g,k:n};var p=[hljs.BE,u];var s={cN:"string",b:"'",e:"'",c:p,r:0};var r={cN:"string",b:'"',e:'"',c:p,r:0};var q={cN:"string",b:"%[qw]?\\(",e:"\\)",c:p,r:10};var o={cN:"string",b:"%[qw]?\\[",e:"\\]",c:p,r:10};var m={cN:"string",b:"%[qw]?{",e:"}",c:p,r:10};var l={cN:"string",b:"%[qw]?<",e:">",c:p,r:10};var k={cN:"string",b:"%[qw]?/",e:"/",c:p,r:10};var j={cN:"string",b:"%[qw]?%",e:"%",c:p,r:10};var i={cN:"string",b:"%[qw]?-",e:"-",c:p,r:10};var t={cN:"string",b:"%[qw]?\\|",e:"\\|",c:p,r:10};var e={cN:"function",b:"\\bdef\\s+",e:" |$|;",l:g,k:n,c:[{cN:"title",b:a,l:g,k:n},{cN:"params",b:"\\(",e:"\\)",l:g,k:n},d,c,b]};var f={cN:"identifier",b:g,l:g,k:n,r:0};var v=[d,c,b,s,r,q,o,m,l,k,j,i,t,{cN:"class",b:"\\b(class|module)\\b",e:"$|;",k:{"class":1,module:1},c:[{cN:"title",b:"[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?",r:0},{cN:"inheritance",b:"<\\s*",c:[{cN:"parent",b:"("+hljs.IR+"::)?"+hljs.IR}]},d,c,b]},e,{cN:"constant",b:"(::)?([A-Z]\\w*(::)?)+",r:0},{cN:"symbol",b:":",c:[s,r,q,o,m,l,k,j,i,t,f],r:0},{cN:"number",b:"(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",r:0},{cN:"number",b:"\\?\\w"},{cN:"variable",b:"(\\$\\W)|((\\$|\\@\\@?)(\\w+))"},f,{b:"("+hljs.RSR+")\\s*",c:[d,c,b,{cN:"regexp",b:"/",e:"/[a-z]*",i:"\\n",c:[hljs.BE]}],r:0}];u.c=v;e.c[1].c=v;return{dM:{l:g,k:n,c:v}}}();hljs.LANGUAGES.diff={cI:true,dM:{c:[{cN:"chunk",b:"^\\@\\@ +\\-\\d+,\\d+ +\\+\\d+,\\d+ +\\@\\@$",r:10},{cN:"chunk",b:"^\\*\\*\\* +\\d+,\\d+ +\\*\\*\\*\\*$",r:10},{cN:"chunk",b:"^\\-\\-\\- +\\d+,\\d+ +\\-\\-\\-\\-$",r:10},{cN:"header",b:"Index: ",e:"$"},{cN:"header",b:"=====",e:"=====$"},{cN:"header",b:"^\\-\\-\\-",e:"$"},{cN:"header",b:"^\\*{3} ",e:"$"},{cN:"header",b:"^\\+\\+\\+",e:"$"},{cN:"header",b:"\\*{5}",e:"\\*{5}$"},{cN:"addition",b:"^\\+",e:"$"},{cN:"deletion",b:"^\\-",e:"$"},{cN:"change",b:"^\\!",e:"$"}]}};hljs.LANGUAGES.javascript={dM:{k:{keyword:{"in":1,"if":1,"for":1,"while":1,"finally":1,"var":1,"new":1,"function":1,"do":1,"return":1,"void":1,"else":1,"break":1,"catch":1,"instanceof":1,"with":1,"throw":1,"case":1,"default":1,"try":1,"this":1,"switch":1,"continue":1,"typeof":1,"delete":1},literal:{"true":1,"false":1,"null":1}},c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM,hljs.CNM,{b:"("+hljs.RSR+"|case|return|throw)\\s*",k:{"return":1,"throw":1,"case":1},c:[hljs.CLCM,hljs.CBLCLM,{cN:"regexp",b:"/",e:"/[gim]*",c:[{b:"\\\\/"}]}],r:0},{cN:"function",b:"\\bfunction\\b",e:"{",k:{"function":1},c:[{cN:"title",b:"[A-Za-z$_][0-9A-Za-z$_]*"},{cN:"params",b:"\\(",e:"\\)",c:[hljs.ASM,hljs.QSM,hljs.CLCM,hljs.CBLCLM]}]}]}};hljs.LANGUAGES.css=function(){var a={cN:"function",b:hljs.IR+"\\(",e:"\\)",c:[{eW:true,eE:true,c:[hljs.NM,hljs.ASM,hljs.QSM]}]};return{cI:true,dM:{i:"[=/|']",c:[hljs.CBLCLM,{cN:"id",b:"\\#[A-Za-z0-9_-]+"},{cN:"class",b:"\\.[A-Za-z0-9_-]+",r:0},{cN:"attr_selector",b:"\\[",e:"\\]",i:"$"},{cN:"pseudo",b:":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"},{cN:"at_rule",b:"@(font-face|page)",l:"[a-z-]+",k:{"font-face":1,page:1}},{cN:"at_rule",b:"@",e:"[{;]",eE:true,k:{"import":1,page:1,media:1,charset:1},c:[a,hljs.ASM,hljs.QSM,hljs.NM]},{cN:"tag",b:hljs.IR,r:0},{cN:"rules",b:"{",e:"}",i:"[^\\s]",r:0,c:[hljs.CBLCLM,{cN:"rule",b:"[^\\s]",rB:true,e:";",eW:true,c:[{cN:"attribute",b:"[A-Z\\_\\.\\-]+",e:":",eE:true,i:"[^\\s]",starts:{cN:"value",eW:true,eE:true,c:[a,hljs.NM,hljs.QSM,hljs.ASM,hljs.CBLCLM,{cN:"hexcolor",b:"\\#[0-9A-F]+"},{cN:"important",b:"!important"}]}}]}]}]}}}();hljs.LANGUAGES.xml=function(){var b="[A-Za-z0-9\\._:-]+";var a={eW:true,c:[{cN:"attribute",b:b,r:0},{b:'="',rB:true,e:'"',c:[{cN:"value",b:'"',eW:true}]},{b:"='",rB:true,e:"'",c:[{cN:"value",b:"'",eW:true}]},{b:"=",c:[{cN:"value",b:"[^\\s/>]+"}]}]};return{cI:true,dM:{c:[{cN:"pi",b:"<\\?",e:"\\?>",r:10},{cN:"doctype",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},{cN:"comment",b:"<!--",e:"-->",r:10},{cN:"cdata",b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"tag",b:"<style",e:">",k:{title:{style:1}},c:[a],starts:{cN:"css",e:"</style>",rE:true,sL:"css"}},{cN:"tag",b:"<script",e:">",k:{title:{script:1}},c:[a],starts:{cN:"javascript",e:"<\/script>",rE:true,sL:"javascript"}},{cN:"vbscript",b:"<%",e:"%>",sL:"vbscript"},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"title",b:"[^ />]+"},a]}]}}}();hljs.LANGUAGES.sql={cI:true,dM:{i:"[^\\s]",c:[{cN:"operator",b:"(begin|start|commit|rollback|savepoint|lock|alter|create|drop|rename|call|delete|do|handler|insert|load|replace|select|truncate|update|set|show|pragma)\\b",e:";|$",k:{keyword:{all:1,partial:1,global:1,month:1,current_timestamp:1,using:1,go:1,revoke:1,smallint:1,indicator:1,"end-exec":1,disconnect:1,zone:1,"with":1,character:1,assertion:1,to:1,add:1,current_user:1,usage:1,input:1,local:1,alter:1,match:1,collate:1,real:1,then:1,rollback:1,get:1,read:1,timestamp:1,session_user:1,not:1,integer:1,bit:1,unique:1,day:1,minute:1,desc:1,insert:1,execute:1,like:1,ilike:2,level:1,decimal:1,drop:1,"continue":1,isolation:1,found:1,where:1,constraints:1,domain:1,right:1,national:1,some:1,module:1,transaction:1,relative:1,second:1,connect:1,escape:1,close:1,system_user:1,"for":1,deferred:1,section:1,cast:1,current:1,sqlstate:1,allocate:1,intersect:1,deallocate:1,numeric:1,"public":1,preserve:1,full:1,"goto":1,initially:1,asc:1,no:1,key:1,output:1,collation:1,group:1,by:1,union:1,session:1,both:1,last:1,language:1,constraint:1,column:1,of:1,space:1,foreign:1,deferrable:1,prior:1,connection:1,unknown:1,action:1,commit:1,view:1,or:1,first:1,into:1,"float":1,year:1,primary:1,cascaded:1,except:1,restrict:1,set:1,references:1,names:1,table:1,outer:1,open:1,select:1,size:1,are:1,rows:1,from:1,prepare:1,distinct:1,leading:1,create:1,only:1,next:1,inner:1,authorization:1,schema:1,corresponding:1,option:1,declare:1,precision:1,immediate:1,"else":1,timezone_minute:1,external:1,varying:1,translation:1,"true":1,"case":1,exception:1,join:1,hour:1,"default":1,"double":1,scroll:1,value:1,cursor:1,descriptor:1,values:1,dec:1,fetch:1,procedure:1,"delete":1,and:1,"false":1,"int":1,is:1,describe:1,"char":1,as:1,at:1,"in":1,varchar:1,"null":1,trailing:1,any:1,absolute:1,current_time:1,end:1,grant:1,privileges:1,when:1,cross:1,check:1,write:1,current_date:1,pad:1,begin:1,temporary:1,exec:1,time:1,update:1,catalog:1,user:1,sql:1,date:1,on:1,identity:1,timezone_hour:1,natural:1,whenever:1,interval:1,work:1,order:1,cascade:1,diagnostics:1,nchar:1,having:1,left:1,call:1,"do":1,handler:1,load:1,replace:1,truncate:1,start:1,lock:1,show:1,pragma:1},aggregate:{count:1,sum:1,min:1,max:1,avg:1}},c:[{cN:"string",b:"'",e:"'",c:[hljs.BE,{b:"''"}],r:0},{cN:"string",b:'"',e:'"',c:[hljs.BE,{b:'""'}],r:0},{cN:"string",b:"`",e:"`",c:[hljs.BE]},hljs.CNM,{b:"\\n"}]},hljs.CBLCLM,{cN:"comment",b:"--",e:"$"}]}};