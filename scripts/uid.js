var ShortUniqueId=(()=>{var h=Object.defineProperty;var _=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(r,t,i)=>t in r?h(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i,l=(r,t)=>{for(var i in t||(t={}))m.call(t,i)&&g(r,i,t[i]);if(_)for(var i of _(t))f.call(t,i)&&g(r,i,t[i]);return r};var I=r=>h(r,"__esModule",{value:!0});var U=(r,t)=>{I(r);for(var i in t)h(r,i,{get:t[i],enumerable:!0})};var y={};U(y,{DEFAULT_UUID_LENGTH:()=>d,default:()=>n});var b="4.4.4";var d=6,q={dictionary:"alphanum",shuffle:!0,debug:!1,length:d},p=class extends Function{constructor(t={}){super();this.dictIndex=0;this.dictRange=[];this.lowerBound=0;this.upperBound=0;this.dictLength=0;this._digit_first_ascii=48;this._digit_last_ascii=58;this._alpha_lower_first_ascii=97;this._alpha_lower_last_ascii=123;this._hex_last_ascii=103;this._alpha_upper_first_ascii=65;this._alpha_upper_last_ascii=91;this._number_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii]};this._alpha_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]};this._alpha_lower_dict_ranges={lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]};this._alpha_upper_dict_ranges={upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]};this._alphanum_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]};this._alphanum_lower_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],lowerCase:[this._alpha_lower_first_ascii,this._alpha_lower_last_ascii]};this._alphanum_upper_dict_ranges={digits:[this._digit_first_ascii,this._digit_last_ascii],upperCase:[this._alpha_upper_first_ascii,this._alpha_upper_last_ascii]};this._hex_dict_ranges={decDigits:[this._digit_first_ascii,this._digit_last_ascii],alphaDigits:[this._alpha_lower_first_ascii,this._hex_last_ascii]};this.log=(...t)=>{let i=[...t];if(i[0]=`[short-unique-id] ${t[0]}`,this.debug===!0&&typeof console!="undefined"&&console!==null)return console.log(...i)};this.setDictionary=(t,i)=>{let e;if(t&&Array.isArray(t)&&t.length>1)e=t;else{e=[];let s;this.dictIndex=s=0;let a=`_${t}_dict_ranges`,o=this[a];Object.keys(o).forEach(c=>{let u=c;for(this.dictRange=o[u],this.lowerBound=this.dictRange[0],this.upperBound=this.dictRange[1],this.dictIndex=s=this.lowerBound;this.lowerBound<=this.upperBound?s<this.upperBound:s>this.upperBound;this.dictIndex=this.lowerBound<=this.upperBound?s+=1:s-=1)e.push(String.fromCharCode(this.dictIndex))})}if(i){let s=.5;e=e.sort(()=>Math.random()-s)}this.dict=e,this.dictLength=this.dict.length,this.counter=0};this.seq=()=>this.sequentialUUID();this.sequentialUUID=()=>{let t,i,e="";t=this.counter;do i=t%this.dictLength,t=Math.trunc(t/this.dictLength),e+=this.dict[i];while(t!==0);return this.counter+=1,e};this.randomUUID=(t=this.uuidLength||d)=>{let i,e,s;if(t===null||typeof t=="undefined"||t<1)throw new Error("Invalid UUID Length Provided");let a=t>=0;for(i="",s=0;s<t;s+=1)e=parseInt((Math.random()*this.dictLength).toFixed(0),10)%this.dictLength,i+=this.dict[e];return i};this.availableUUIDs=(t=this.uuidLength)=>parseFloat(Math.pow([...new Set(this.dict)].length,t).toFixed(0));this.approxMaxBeforeCollision=(t=this.availableUUIDs(this.uuidLength))=>parseFloat(Math.sqrt(Math.PI/2*t).toFixed(20));this.collisionProbability=(t=this.availableUUIDs(this.uuidLength),i=this.uuidLength)=>parseFloat((this.approxMaxBeforeCollision(t)/this.availableUUIDs(i)).toFixed(20));this.uniqueness=(t=this.availableUUIDs(this.uuidLength))=>{let i=parseFloat((1-this.approxMaxBeforeCollision(t)/t).toFixed(20));return i>1?1:i<0?0:i};this.getVersion=()=>this.version;this.stamp=t=>{if(typeof t!="number"||t<10)throw new Error("Param finalLength must be number greater than 10");let i=Math.floor(+new Date/1e3).toString(16),e=t-9,s=Math.round(Math.random()*(e>15?15:e)),a=this.randomUUID(e);return`${a.substr(0,s)}${i}${a.substr(s)}${s.toString(16)}`};this.parseStamp=t=>{if(t.length<10)throw new Error("Stamp length invalid");let i=parseInt(t.substr(t.length-1,1),16);return new Date(parseInt(t.substr(i,8),16)*1e3)};let i=l(l({},q),t);this.counter=0,this.debug=!1,this.dict=[],this.version=b;let{dictionary:e,shuffle:s,length:a}=i;return this.uuidLength=a,this.setDictionary(e,s),this.debug=i.debug,this.log(this.dict),this.log(`Generator instantiated with Dictionary Size ${this.dictLength}`),new Proxy(this,{apply:(o,c,u)=>this.randomUUID(...u)})}},n=p;n.default=p;return y;})();
'undefined'!=typeof module&&(module.exports=ShortUniqueId.default),'undefined'!=typeof window&&(ShortUniqueId=ShortUniqueId.default);

function my_function() {
  var uid = new ShortUniqueId({ dictionary: 'alphanum_lower' });
  return(uid.randomUUID(6));
}
module.exports = my_function;