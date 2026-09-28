(()=>{var Fu=0,Kc=1,zu=2;var io=1,Ya=2,sr=3,$n=0,ti=1,Ke=2,Ni=0,Zn=1,Ge=2,jc=3,Qc=4,ku=5;var ds=100,Bu=101,Ou=102,Hu=103,Vu=104,Gu=200,Wu=201,Xu=202,qu=203,th=204,eh=205,Yu=206,$u=207,Zu=208,Ju=209,Ku=210,ju=211,Qu=212,td=213,ed=214,fa=0,pa=1,ma=2,Ws=3,ga=4,xa=5,_a=6,ya=7,$a=0,id=1,nd=2,Xi=0,no=1,so=2,ro=3,un=4,oo=5,ao=6,lo=7;var ih=300,Jn=301,fs=302,Za=303,Ja=304,co=306,Vn=1e3,nn=1001,va=1002,Je=1003,sd=1004;var ho=1005;var Ve=1006,Ka=1007;var Kn=1008;var yi=1009,nh=1010,sh=1011,rr=1012,ja=1013,qi=1014,Ui=1015,ei=1016,Qa=1017,tl=1018,or=1020,rh=35902,oh=35899,ah=1021,lh=1022,Fi=1023,sn=1026,jn=1027,el=1028,il=1029,Qn=1030,nl=1031;var sl=1033,uo=33776,fo=33777,po=33778,mo=33779,rl=35840,ol=35841,al=35842,ll=35843,cl=36196,hl=37492,ul=37496,dl=37488,fl=37489,go=37490,pl=37491,ml=37808,gl=37809,xl=37810,_l=37811,yl=37812,vl=37813,Ml=37814,bl=37815,Sl=37816,wl=37817,Tl=37818,El=37819,Al=37820,Rl=37821,Cl=36492,Pl=36494,Il=36495,Ll=36283,Dl=36284,xo=36285,Nl=36286;var Ir=2300,Ma=2301,ua=2302,Hc=2303,Vc=2400,Gc=2401,Wc=2402;var rd=3200;var _o=0,od=1,En="",Re="srgb",Lr="srgb-linear",Dr="linear",oe="srgb";var da=7680;var ad=519,ld=512,cd=513,hd=514,Ul=515,ud=516,dd=517,Fl=518,fd=519,ch=35044,ts=35048;var hh="300 es",Wi=2e3,Xs=2001;function qf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Yf(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Nr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pd(){let s=Nr("canvas");return s.style.display="block",s}var nu={},qs=null;function Ur(...s){let t="THREE."+s.shift();qs?qs("log",t,...s):console.log(t,...s)}function md(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function zt(...s){s=md(s);let t="THREE."+s.shift();if(qs)qs("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function kt(...s){s=md(s);let t="THREE."+s.shift();if(qs)qs("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function cs(...s){let t=s.join(" ");t in nu||(nu[t]=!0,zt(...s))}function gd(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var xd={[fa]:pa,[ma]:_a,[ga]:ya,[Ws]:xa,[pa]:fa,[_a]:ma,[ya]:ga,[xa]:Ws},rn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let n=i[t];if(n!==void 0){let r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var gc=Math.PI/180,ba=180/Math.PI;function Hn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ri[s&255]+ri[s>>8&255]+ri[s>>16&255]+ri[s>>24&255]+"-"+ri[t&255]+ri[t>>8&255]+"-"+ri[t>>16&15|64]+ri[t>>24&255]+"-"+ri[e&63|128]+ri[e>>8&255]+"-"+ri[e>>16&255]+ri[e>>24&255]+ri[i&255]+ri[i>>8&255]+ri[i>>16&255]+ri[i>>24&255]).toLowerCase()}function jt(s,t,e){return Math.max(t,Math.min(e,s))}function $f(s,t){return(s%t+t)%t}function xc(s,t,e){return(1-e)*s+e*t}function en(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function xe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var _t=class s{static{s.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ii=class{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);p=Math.sin(p*v)/T,a=Math.sin(a*v)/T,l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a}else{l=l*p+u*a,c=c*p+f*a,h=h*p+g*a,d=d*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,n,r,o){let a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-a*f,t[e+2]=c*g+h*f+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),d=a(r/2),u=l(i/2),f=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-n)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-c)/f,this._x=(n+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-n)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,n=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,n=-n,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+n*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{static{s.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(su.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(su.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),d=2*(r*i-o*e);return this.x=e+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=n+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return _c.copy(this).projectOnVector(t),this.sub(_c)}reflect(t){return this.sub(_c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(jt(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},_c=new C,su=new Ii,Bt=class s{static{s.prototype.isMatrix3=!0}constructor(t,e,i,n,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],v=n[1],T=n[4],M=n[7],w=n[2],S=n[5],R=n[8];return r[0]=o*x+a*v+l*w,r[3]=o*m+a*T+l*S,r[6]=o*p+a*M+l*R,r[1]=c*x+h*v+d*w,r[4]=c*m+h*T+d*S,r[7]=c*p+h*M+d*R,r[2]=u*x+f*v+g*w,r[5]=u*m+f*T+g*S,r[8]=u*p+f*M+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,g=e*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=u*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=f*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yc.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yc.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},yc=new Bt,ru=new Bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ou=new Bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Zf(){let s={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(n,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===oe&&(n.r=bn(n.r),n.g=bn(n.g),n.b=bn(n.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===oe&&(n.r=Gs(n.r),n.g=Gs(n.g),n.b=Gs(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===En?Dr:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,o){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Lr]:{primaries:t,whitePoint:i,transfer:Dr,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Re},outputColorSpaceConfig:{drawingBufferColorSpace:Re}},[Re]:{primaries:t,whitePoint:i,transfer:oe,toXYZ:ru,fromXYZ:ou,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Re}}}),s}var qt=Zf();function bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Gs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ts,Sa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ts===void 0&&(Ts=Nr("canvas")),Ts.width=t.width,Ts.height=t.height;let n=Ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),i=Ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Nr("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bn(e[i]/255)*255):e[i]=bn(e[i]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(vc(n[o].image)):r.push(vc(n[o]))}else r=vc(n);i.url=r}return e||(t.images[this.uuid]=i),i}};function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Sa.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Kf=0,Mc=new C,mi=class s extends rn{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,i=nn,n=nn,r=Ve,o=Kn,a=Fi,l=yi,c=s.DEFAULT_ANISOTROPY,h=En){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Hn(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Mc).x}get height(){return this.source.getSize(Mc).y}get depth(){return this.source.getSize(Mc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vn:t.x=t.x-Math.floor(t.x);break;case nn:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vn:t.y=t.y-Math.floor(t.y);break;case nn:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};mi.DEFAULT_IMAGE=null;mi.DEFAULT_MAPPING=ih;mi.DEFAULT_ANISOTROPY=1;var Ce=class s{static{s.prototype.isVector4=!0}constructor(t=0,e=0,i=0,n=1){this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let T=(c+1)/2,M=(f+1)/2,w=(p+1)/2,S=(h+u)/4,R=(d+x)/4,y=(g+m)/4;return T>M&&T>w?T<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(T),n=S/i,r=R/i):M>w?M<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(M),i=S/n,r=y/n):w<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(w),i=R/r,n=y/r),this.set(i,n,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(jt(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},wa=class extends rn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ve,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let n={width:t,height:e,depth:i.depth},r=new mi(n),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ve,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let n=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(n)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ue=class extends wa{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Fr=class extends mi{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ta=class extends mi{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=Je,this.minFilter=Je,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var de=class s{static{s.prototype.isMatrix4=!0}constructor(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=n,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,n=1/Es.setFromMatrixColumn(t,0).length(),r=1/Es.setFromMatrixColumn(t,1).length(),o=1/Es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*l,f=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jf,t,Qf)}lookAt(t,e,i){let n=this.elements;return Mi.subVectors(t,e),Mi.lengthSq()===0&&(Mi.z=1),Mi.normalize(),Fn.crossVectors(i,Mi),Fn.lengthSq()===0&&(Math.abs(i.z)===1?Mi.x+=1e-4:Mi.z+=1e-4,Mi.normalize(),Fn.crossVectors(i,Mi)),Fn.normalize(),ko.crossVectors(Mi,Fn),n[0]=Fn.x,n[4]=ko.x,n[8]=Mi.x,n[1]=Fn.y,n[5]=ko.y,n[9]=Mi.y,n[2]=Fn.z,n[6]=ko.z,n[10]=Mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],T=i[7],M=i[11],w=i[15],S=n[0],R=n[4],y=n[8],E=n[12],P=n[1],F=n[5],L=n[9],B=n[13],I=n[2],k=n[6],X=n[10],W=n[14],it=n[3],q=n[7],j=n[11],Q=n[15];return r[0]=o*S+a*P+l*I+c*it,r[4]=o*R+a*F+l*k+c*q,r[8]=o*y+a*L+l*X+c*j,r[12]=o*E+a*B+l*W+c*Q,r[1]=h*S+d*P+u*I+f*it,r[5]=h*R+d*F+u*k+f*q,r[9]=h*y+d*L+u*X+f*j,r[13]=h*E+d*B+u*W+f*Q,r[2]=g*S+x*P+m*I+p*it,r[6]=g*R+x*F+m*k+p*q,r[10]=g*y+x*L+m*X+p*j,r[14]=g*E+x*B+m*W+p*Q,r[3]=v*S+T*P+M*I+w*it,r[7]=v*R+T*F+M*k+w*q,r[11]=v*y+T*L+M*X+w*j,r[15]=v*E+T*B+M*W+w*Q,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*f-c*u,T=a*f-c*d,M=a*u-l*d,w=o*f-c*h,S=o*u-l*h,R=o*d-a*h;return e*(x*v-m*T+p*M)-i*(g*v-m*w+p*S)+n*(g*T-x*w+p*R)-r*(g*M-x*S+m*R)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],n=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-i*(r*h-a*l)+n*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-i*o,T=e*l-n*o,M=e*c-r*o,w=i*l-n*a,S=i*c-r*a,R=n*c-r*l,y=h*x-d*g,E=h*m-u*g,P=h*p-f*g,F=d*m-u*x,L=d*p-f*x,B=u*p-f*m,I=v*B-T*L+M*F+w*P-S*E+R*y;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(a*B-l*L+c*F)*k,t[1]=(n*L-i*B-r*F)*k,t[2]=(x*R-m*S+p*w)*k,t[3]=(u*S-d*R-f*w)*k,t[4]=(l*P-o*B-c*E)*k,t[5]=(e*B-n*P+r*E)*k,t[6]=(m*M-g*R-p*T)*k,t[7]=(h*R-u*M+f*T)*k,t[8]=(o*L-a*P+c*y)*k,t[9]=(i*P-e*L-r*y)*k,t[10]=(g*S-x*M+p*v)*k,t[11]=(d*M-h*S-f*v)*k,t[12]=(a*E-o*F-l*y)*k,t[13]=(e*F-i*E+n*y)*k,t[14]=(x*T-g*w-m*v)*k,t[15]=(h*w-d*T+u*v)*k,this}scale(t){let e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){let n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,v=l*c,T=l*h,M=l*d,w=i.x,S=i.y,R=i.z;return n[0]=(1-(x+p))*w,n[1]=(f+M)*w,n[2]=(g-T)*w,n[3]=0,n[4]=(f-M)*S,n[5]=(1-(u+p))*S,n[6]=(m+v)*S,n[7]=0,n[8]=(g+T)*R,n[9]=(m-v)*R,n[10]=(1-(u+x))*R,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){let n=this.elements;t.x=n[12],t.y=n[13],t.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Es.set(n[0],n[1],n[2]).length(),a=Es.set(n[4],n[5],n[6]).length(),l=Es.set(n[8],n[9],n[10]).length();r<0&&(o=-o),Hi.copy(this);let c=1/o,h=1/a,d=1/l;return Hi.elements[0]*=c,Hi.elements[1]*=c,Hi.elements[2]*=c,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=d,Hi.elements[9]*=d,Hi.elements[10]*=d,e.setFromRotationMatrix(Hi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,n,r,o,a=Wi,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-n),u=(e+t)/(e-t),f=(i+n)/(i-n),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Wi)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Xs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=Wi,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-n),u=-(e+t)/(e-t),f=-(i+n)/(i-n),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Wi)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Xs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},Es=new C,Hi=new de,jf=new C(0,0,0),Qf=new C(1,1,1),Fn=new C,ko=new C,Mi=new C,au=new de,lu=new Ii,on=class s{constructor(t=0,e=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(e){case"XYZ":this._y=Math.asin(jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-jt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(jt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return au.makeRotationFromQuaternion(t),this.setFromRotationMatrix(au,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lu.setFromEuler(this),this.setFromQuaternion(lu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var $s=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},tp=0,cu=new C,As=new Ii,gn=new de,Bo=new C,Mr=new C,ep=new C,ip=new Ii,hu=new C(1,0,0),uu=new C(0,1,0),du=new C(0,0,1),fu={type:"added"},np={type:"removed"},Rs={type:"childadded",child:null},bc={type:"childremoved",child:null},Pe=class s extends rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new C,e=new on,i=new Ii,n=new C(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new de},normalMatrix:{value:new Bt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $s,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(hu,t)}rotateY(t){return this.rotateOnAxis(uu,t)}rotateZ(t){return this.rotateOnAxis(du,t)}translateOnAxis(t,e){return cu.copy(t).applyQuaternion(this.quaternion),this.position.add(cu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hu,t)}translateY(t){return this.translateOnAxis(uu,t)}translateZ(t){return this.translateOnAxis(du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Bo.copy(t):Bo.set(t,e,i);let n=this.parent;this.updateWorldMatrix(!0,!1),Mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gn.lookAt(Mr,Bo,this.up):gn.lookAt(Bo,Mr,this.up),this.quaternion.setFromRotationMatrix(gn),n&&(gn.extractRotation(n.matrixWorld),As.setFromRotationMatrix(gn),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(np),bc.child=t,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,t,ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mr,ip,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,n=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*n,r[13]+=i-r[1]*e-r[5]*i-r[9]*n,r[14]+=n-r[2]*e-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(a=>({...a})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(t),n.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let n=t.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pe.DEFAULT_UP=new C(0,1,0);Pe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kt=class extends Pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},sp={type:"move"},Zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Kt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zn={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Sc(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var rt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.colorSpaceToWorking(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=$f(t,1),e=jt(e,0,1),i=jt(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Sc(o,r,t+1/3),this.g=Sc(o,r,t),this.b=Sc(o,r,t-1/3)}return qt.colorSpaceToWorking(this,n),this}setStyle(t,e=Re){function i(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){let i=_d[t.toLowerCase()];return i!==void 0?this.setHex(i,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return qt.workingToColorSpace(oi.copy(this),t),Math.round(jt(oi.r*255,0,255))*65536+Math.round(jt(oi.g*255,0,255))*256+Math.round(jt(oi.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.workingToColorSpace(oi.copy(this),e);let i=oi.r,n=oi.g,r=oi.b,o=Math.max(i,n,r),a=Math.min(i,n,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(n-r)/d+(n<r?6:0);break;case n:l=(r-i)/d+2;break;case r:l=(i-n)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.workingToColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=Re){qt.workingToColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,n=oi.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(zn),this.setHSL(zn.h+t,zn.s+e,zn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(zn),t.getHSL(Oo);let i=xc(zn.h,Oo.h,e),n=xc(zn.s,Oo.s,e),r=xc(zn.l,Oo.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new rt;rt.NAMES=_d;var zr=class s{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new rt(t),this.near=e,this.far=i}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_i=class extends Pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Vi=new C,xn=new C,wc=new C,_n=new C,Cs=new C,Ps=new C,pu=new C,Tc=new C,Ec=new C,Ac=new C,Rc=new Ce,Cc=new Ce,Pc=new Ce,Mn=class s{constructor(t=new C,e=new C,i=new C){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Vi.subVectors(t,e),n.cross(Vi);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Vi.subVectors(n,e),xn.subVectors(i,e),wc.subVectors(t,e);let o=Vi.dot(Vi),a=Vi.dot(xn),l=Vi.dot(wc),c=xn.dot(xn),h=xn.dot(wc),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,g=(o*h-a*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(o,_n.y),l.addScaledVector(a,_n.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return Rc.setScalar(0),Cc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(t,e),Cc.fromBufferAttribute(t,i),Pc.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(Rc,r.x),o.addScaledVector(Cc,r.y),o.addScaledVector(Pc,r.z),o}static isFrontFacing(t,e,i,n){return Vi.subVectors(i,e),xn.subVectors(t,e),Vi.cross(xn).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Vi.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return s.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,n=this.b,r=this.c,o,a;Cs.subVectors(n,i),Ps.subVectors(r,i),Tc.subVectors(t,i);let l=Cs.dot(Tc),c=Ps.dot(Tc);if(l<=0&&c<=0)return e.copy(i);Ec.subVectors(t,n);let h=Cs.dot(Ec),d=Ps.dot(Ec);if(h>=0&&d<=h)return e.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(Cs,o);Ac.subVectors(t,r);let f=Cs.dot(Ac),g=Ps.dot(Ac);if(g>=0&&f<=g)return e.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(Ps,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return pu.subVectors(r,n),a=(d-h)/(d-h+(f-g)),e.copy(n).addScaledVector(pu,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(i).addScaledVector(Cs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},an=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Gi):Gi.fromBufferAttribute(r,o),Gi.applyMatrix4(t.matrixWorld),this.expandByPoint(Gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ho.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ho.copy(i.boundingBox)),Ho.applyMatrix4(t.matrixWorld),this.union(Ho)}let n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Gi),Gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(br),Vo.subVectors(this.max,br),Is.subVectors(t.a,br),Ls.subVectors(t.b,br),Ds.subVectors(t.c,br),kn.subVectors(Ls,Is),Bn.subVectors(Ds,Ls),rs.subVectors(Is,Ds);let e=[0,-kn.z,kn.y,0,-Bn.z,Bn.y,0,-rs.z,rs.y,kn.z,0,-kn.x,Bn.z,0,-Bn.x,rs.z,0,-rs.x,-kn.y,kn.x,0,-Bn.y,Bn.x,0,-rs.y,rs.x,0];return!Ic(e,Is,Ls,Ds,Vo)||(e=[1,0,0,0,1,0,0,0,1],!Ic(e,Is,Ls,Ds,Vo))?!1:(Go.crossVectors(kn,Bn),e=[Go.x,Go.y,Go.z],Ic(e,Is,Ls,Ds,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yn=[new C,new C,new C,new C,new C,new C,new C,new C],Gi=new C,Ho=new an,Is=new C,Ls=new C,Ds=new C,kn=new C,Bn=new C,rs=new C,br=new C,Vo=new C,Go=new C,os=new C;function Ic(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){os.fromArray(s,r);let a=n.x*Math.abs(os.x)+n.y*Math.abs(os.y)+n.z*Math.abs(os.z),l=t.dot(os),c=e.dot(os),h=i.dot(os);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var He=new C,Wo=new _t,rp=0,Le=class extends rn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=ch,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Wo.fromBufferAttribute(this,e),Wo.applyMatrix3(t),this.setXY(e,Wo.x,Wo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=en(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=en(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=en(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=en(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=en(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var kr=class extends Le{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Br=class extends Le{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Yt=class extends Le{constructor(t,e,i){super(new Float32Array(t),e,i)}},op=new an,Sr=new C,Lc=new C,ln=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):op.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sr.subVectors(t,this.center);let e=Sr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Sr,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sr.copy(t.center).add(Lc)),this.expandByPoint(Sr.copy(t.center).sub(Lc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},ap=0,Pi=new de,Dc=new Pe,Ns=new C,bi=new an,wr=new an,Ze=new C,_e=class s extends rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qf(t)?Br:kr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Bt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Pi.makeRotationFromQuaternion(t),this.applyMatrix4(Pi),this}rotateX(t){return Pi.makeRotationX(t),this.applyMatrix4(Pi),this}rotateY(t){return Pi.makeRotationY(t),this.applyMatrix4(Pi),this}rotateZ(t){return Pi.makeRotationZ(t),this.applyMatrix4(Pi),this}translate(t,e,i){return Pi.makeTranslation(t,e,i),this.applyMatrix4(Pi),this}scale(t,e,i){return Pi.makeScale(t,e,i),this.applyMatrix4(Pi),this}lookAt(t){return Dc.lookAt(t),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let n=0,r=t.length;n<r;n++){let o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{let i=Math.min(t.length,e.count);for(let n=0;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new an);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){let r=e[i];bi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,bi.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,bi.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(bi.min),this.boundingBox.expandByPoint(bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ln);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let i=this.boundingSphere.center;if(bi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];wr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(bi.min,wr.min),bi.expandByPoint(Ze),Ze.addVectors(bi.max,wr.max),bi.expandByPoint(Ze)):(bi.expandByPoint(wr.min),bi.expandByPoint(wr.max))}bi.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Ze.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Ns.fromBufferAttribute(t,c),Ze.add(Ns)),n=Math.max(n,i.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,n=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new Le(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new C,l[y]=new C;let c=new C,h=new C,d=new C,u=new _t,f=new _t,g=new _t,x=new C,m=new C;function p(y,E,P){c.fromBufferAttribute(i,y),h.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,P),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let F=1/(f.x*g.y-g.x*f.y);isFinite(F)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(F),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(F),a[y].add(x),a[E].add(x),a[P].add(x),l[y].add(m),l[E].add(m),l[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,E=v.length;y<E;++y){let P=v[y],F=P.start,L=P.count;for(let B=F,I=F+L;B<I;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let T=new C,M=new C,w=new C,S=new C;function R(y){w.fromBufferAttribute(n,y),S.copy(w);let E=a[y];T.copy(E),T.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(S,E);let F=M.dot(l[y])<0?-1:1;o.setXYZW(y,T.x,T.y,T.z,F)}for(let y=0,E=v.length;y<E;++y){let P=v[y],F=P.start,L=P.count;for(let B=F,I=F+L;B<I;B+=3)R(t.getX(B+0)),R(t.getX(B+1)),R(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new Le(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let n=new C,r=new C,o=new C,a=new C,l=new C,c=new C,h=new C,d=new C;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)n.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(n,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new Le(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,i=this.index.array,n=this.attributes;for(let a in n){let l=n[a],c=t(l,i);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let n={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let n=t.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Or=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ch,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},pi=new C,Js=class s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)pi.fromBufferAttribute(this,e),pi.applyMatrix4(t),this.setXYZ(e,pi.x,pi.y,pi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)pi.fromBufferAttribute(this,e),pi.applyNormalMatrix(t),this.setXYZ(e,pi.x,pi.y,pi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)pi.fromBufferAttribute(this,e),pi.transformDirection(t),this.setXYZ(e,pi.x,pi.y,pi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=en(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=xe(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=en(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=en(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=en(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=en(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),i=xe(i,this.array),n=xe(n,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ur("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ur("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nc=new C,lp=new C,cp=new Bt,Si=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let n=Nc.subVectors(i,e).cross(lp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let n=t.delta(Nc),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||cp.getNormalMatrix(t),n=this.coplanarPoint(Nc).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},hp=0,Li=class extends rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Zn,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=th,this.blendDst=eh,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let n=this[e];if(n===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Si().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new _t().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Ks=class extends Li{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Us,Tr=new C,Fs=new C,zs=new C,ks=new _t,Er=new _t,yd=new de,Xo=new C,Ar=new C,qo=new C,mu=new _t,Uc=new _t,gu=new _t,Hr=class extends Pe{constructor(t=new Ks){if(super(),this.isSprite=!0,this.type="Sprite",Us===void 0){Us=new _e;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Or(e,5);Us.setIndex([0,1,2,0,2,3]),Us.setAttribute("position",new Js(i,3,0,!1)),Us.setAttribute("uv",new Js(i,2,3,!1))}this.geometry=Us,this.material=t,this.center=new _t(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fs.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fs.multiplyScalar(-zs.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let o=this.center;Yo(Xo.set(-.5,-.5,0),zs,o,Fs,n,r),Yo(Ar.set(.5,-.5,0),zs,o,Fs,n,r),Yo(qo.set(.5,.5,0),zs,o,Fs,n,r),mu.set(0,0),Uc.set(1,0),gu.set(1,1);let a=t.ray.intersectTriangle(Xo,Ar,qo,!1,Tr);if(a===null&&(Yo(Ar.set(-.5,.5,0),zs,o,Fs,n,r),Uc.set(0,1),a=t.ray.intersectTriangle(Xo,qo,Ar,!1,Tr),a===null))return;let l=t.ray.origin.distanceTo(Tr);l<t.near||l>t.far||e.push({distance:l,point:Tr.clone(),uv:Mn.getInterpolation(Tr,Xo,Ar,qo,mu,Uc,gu,new _t),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yo(s,t,e,i,n,r){ks.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(Er.x=r*ks.x-n*ks.y,Er.y=n*ks.x+r*ks.y):Er.copy(ks),s.copy(t),s.x+=Er.x,s.y+=Er.y,s.applyMatrix4(yd)}var vn=new C,Fc=new C,$o=new C,Zo=new C,hs=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){Fc.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Zo.copy(this.origin).sub(Fc);let r=t.distanceTo(e)*.5,o=-this.direction.dot($o),a=Zo.dot(this.direction),l=-Zo.dot($o),c=Zo.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*l-a,u=o*a-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Fc).addScaledVector($o,u),f}intersectSphere(t,e){if(t.radius<0)return null;vn.subVectors(t.center,this.origin);let i=vn.dot(this.direction),n=vn.dot(vn)-i*i,r=t.radius*t.radius;if(n>r)return null;let o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,n=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,n=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,n,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=i.x-o.x,v=i.y-o.y,T=i.z-o.z,M=Math.abs(l),w=Math.abs(c),S=Math.abs(h),R,y,E,P,F,L,B,I,k,X,W,it;if(M>=w&&M>=S?(E=l,L=d,k=g,it=p,l>=0?(R=c,y=h,P=u,F=f,B=x,I=m,X=v,W=T):(R=h,y=c,P=f,F=u,B=m,I=x,X=T,W=v)):w>=S?(E=c,L=u,k=x,it=v,c>=0?(R=h,y=l,P=f,F=d,B=m,I=g,X=T,W=p):(R=l,y=h,P=d,F=f,B=g,I=m,X=p,W=T)):(E=h,L=f,k=m,it=T,h>=0?(R=l,y=c,P=d,F=u,B=g,I=x,X=p,W=v):(R=c,y=l,P=u,F=d,B=x,I=g,X=v,W=p)),E===0)return null;let q=R/E,j=y/E,Q=1/E,Ct=P-q*L,Dt=F-j*L,Me=B-q*k,ne=I-j*k,le=X-q*it,$=W-j*it,tt=le*ne-$*Me,bt=Ct*$-Dt*le,Ot=Me*Dt-ne*Ct;if(n){if(tt<0||bt<0||Ot<0)return null}else if((tt<0||bt<0||Ot<0)&&(tt>0||bt>0||Ot>0))return null;let vt=tt+bt+Ot;if(vt===0)return null;let Xt=Q*(tt*L+bt*k+Ot*it);return(vt>0?Xt<0:Xt>0)?null:this.at(Xt/vt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends Li{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=$a,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},xu=new de,as=new hs,Jo=new ln,_u=new C,Ko=new C,jo=new C,Qo=new C,zc=new C,ta=new C,yu=new C,ea=new C,ot=class extends Pe{constructor(t=new _e,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);let a=this.morphTargetInfluences;if(r&&a){ta.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(zc.fromBufferAttribute(d,t),o?ta.addScaledVector(zc,h):ta.addScaledVector(zc.sub(e),h))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Jo.copy(i.boundingSphere),Jo.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Jo.containsPoint(as.origin)===!1&&(as.intersectSphere(Jo,_u)===null||as.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(xu.copy(r).invert(),as.copy(t.ray).applyMatrix4(xu),!(i.boundingBox!==null&&as.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,i){let n,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=T;M<w;M+=3){let S=a.getX(M),R=a.getX(M+1),y=a.getX(M+2);n=ia(this,p,t,i,c,h,d,S,R,y),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),T=a.getX(m+1),M=a.getX(m+2);n=ia(this,o,t,i,c,h,d,v,T,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],v=Math.max(m.start,f.start),T=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=v,w=T;M<w;M+=3){let S=M,R=M+1,y=M+2;n=ia(this,p,t,i,c,h,d,S,R,y),n&&(n.faceIndex=Math.floor(M/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,T=m+1,M=m+2;n=ia(this,o,t,i,c,h,d,v,T,M),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}};function up(s,t,e,i,n,r,o,a){let l;if(t.side===ti?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===$n,a),l===null)return null;ea.copy(a),ea.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:s}}function ia(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,Ko),s.getVertexPosition(l,jo),s.getVertexPosition(c,Qo);let h=up(s,t,e,i,Ko,jo,Qo,yu);if(h){let d=new C;Mn.getBarycoord(yu,Ko,jo,Qo,d),n&&(h.uv=Mn.getInterpolatedAttribute(n,a,l,c,d,new _t)),r&&(h.uv1=Mn.getInterpolatedAttribute(r,a,l,c,d,new _t)),o&&(h.normal=Mn.getInterpolatedAttribute(o,a,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new C,materialIndex:0};Mn.getNormal(Ko,jo,Qo,u.normal),h.face=u,h.barycoord=d}return h}var Vr=class extends mi{constructor(t=null,e=1,i=1,n,r,o,a,l,c=Je,h=Je,d,u){super(null,o,a,l,c,h,n,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var js=class extends Le{constructor(t,e,i,n=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bs=new de,vu=new de,na=[],Mu=new an,dp=new de,Rr=new ot,Cr=new ln,Gr=class extends ot{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new js(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,dp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new an),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Mu.copy(t.boundingBox).applyMatrix4(Bs),this.boundingBox.union(Mu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ln),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bs),Cr.copy(t.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=n[o+a]}raycast(t,e){let i=this.matrixWorld,n=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(i),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Bs),vu.multiplyMatrices(i,Bs),Rr.matrixWorld=vu,Rr.raycast(t,na);for(let o=0,a=na.length;o<a;o++){let l=na[o];l.instanceId=r,l.object=this,e.push(l)}na.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new js(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vr(new Float32Array(n*this.count),n,this.count,el,Ui));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<i.length;c++)o+=i[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=n*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ls=new ln,fp=new _t(.5,.5),sa=new C,Qs=class{constructor(t=new Si,e=new Si,i=new Si,n=new Si,r=new Si,o=new Si){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wi,i=!1){let n=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],T=r[13],M=r[14],w=r[15];if(n[0].setComponents(c-o,f-h,p-g,w-v).normalize(),n[1].setComponents(c+o,f+h,p+g,w+v).normalize(),n[2].setComponents(c+a,f+d,p+x,w+T).normalize(),n[3].setComponents(c-a,f-d,p-x,w-T).normalize(),i)n[4].setComponents(l,u,m,M).normalize(),n[5].setComponents(c-l,f-u,p-m,w-M).normalize();else if(n[4].setComponents(c-l,f-u,p-m,w-M).normalize(),e===Wi)n[5].setComponents(c+l,f+u,p+m,w+M).normalize();else if(e===Xs)n[5].setComponents(l,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(t){ls.center.set(0,0,0);let e=fp.distanceTo(t.center);return ls.radius=.7071067811865476+e,ls.applyMatrix4(t.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(t){let e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let n=e[i];if(sa.x=n.normal.x>0?t.max.x:t.min.x,sa.y=n.normal.y>0?t.max.y:t.min.y,sa.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(sa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends Li{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ea=new C,Aa=new C,bu=new de,Pr=new hs,ra=new ln,kc=new C,Su=new C,Ra=class extends Pe{constructor(t=new _e,e=new Wr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Ea.fromBufferAttribute(e,n-1),Aa.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Ea.distanceTo(Aa);t.setAttribute("lineDistance",new Yt(i,1))}else zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(n),ra.radius+=r,t.ray.intersectsSphere(ra)===!1)return;bu.copy(n).invert(),Pr.copy(t.ray).applyMatrix4(bu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),T=oa(this,t,Pr,l,p,v,x);T&&e.push(T)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=oa(this,t,Pr,l,x,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=f,m=g-1;x<m;x+=c){let p=oa(this,t,Pr,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=oa(this,t,Pr,l,g-1,f,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function oa(s,t,e,i,n,r,o){let a=s.geometry.attributes.position;if(Ea.fromBufferAttribute(a,n),Aa.fromBufferAttribute(a,r),e.distanceSqToSegment(Ea,Aa,kc,Su)>i)return;kc.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(kc);if(!(c<t.near||c>t.far))return{distance:c,point:Su.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var wu=new C,Tu=new C,Ca=class extends Ra{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[];for(let n=0,r=e.count;n<r;n+=2)wu.fromBufferAttribute(e,n),Tu.fromBufferAttribute(e,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+wu.distanceTo(Tu);t.setAttribute("lineDistance",new Yt(i,1))}else zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Pa=class extends Li{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Eu=new de,Xc=new hs,aa=new ln,la=new C,Xr=class extends Pe{constructor(t=new _e,e=new Pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,n=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(n),aa.radius+=r,t.ray.intersectsSphere(aa)===!1)return;Eu.copy(n).invert(),Xc.copy(t.ray).applyMatrix4(Eu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=c.getX(g);la.fromBufferAttribute(d,m),Au(la,m,l,n,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)la.fromBufferAttribute(d,g),Au(la,g,l,n,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){let a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Au(s,t,e,i,n,r,o){let a=Xc.distanceSqToPoint(s);if(a<e){let l=new C;Xc.closestPointToPoint(s,l),l.applyMatrix4(i);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var qr=class extends mi{constructor(t=[],e=Jn,i,n,r,o,a,l,c,h){super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Sn=class extends mi{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Gn=class extends mi{constructor(t,e,i=qi,n,r,o,a=Je,l=Je,c,h=sn,d=1){if(h!==sn&&h!==jn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Ia=class extends Gn{constructor(t,e=qi,i=Jn,n,r,o=Je,a=Je,l,c=sn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,n,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yr=class extends mi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Fe=class s extends _e{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};let a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2));function g(x,m,p,v,T,M,w,S,R,y,E){let P=M/R,F=w/y,L=M/2,B=w/2,I=S/2,k=R+1,X=y+1,W=0,it=0,q=new C;for(let j=0;j<X;j++){let Q=j*F-B;for(let Ct=0;Ct<k;Ct++){let Dt=Ct*P-L;q[x]=Dt*v,q[m]=Q*T,q[p]=I,c.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=S>0?1:-1,h.push(q.x,q.y,q.z),d.push(Ct/R),d.push(1-j/y),W+=1}}for(let j=0;j<y;j++)for(let Q=0;Q<R;Q++){let Ct=u+Q+k*j,Dt=u+Q+k*(j+1),Me=u+(Q+1)+k*(j+1),ne=u+(Q+1)+k*j;l.push(Ct,Dt,ne),l.push(Dt,Me,ne),it+=6}a.addGroup(f,it,E),f+=it,u+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var $r=class s extends _e{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new C,h=new _t;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*n;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ke=class s extends _e{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;n=Math.floor(n),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=i/2,p=0;v(),o===!1&&(t>0&&T(!0),e>0&&T(!1)),this.setIndex(h),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(u,3)),this.setAttribute("uv",new Yt(f,2));function v(){let M=new C,w=new C,S=0,R=(e-t)/i;for(let y=0;y<=r;y++){let E=[],P=y/r,F=P*(e-t)+t;for(let L=0;L<=n;L++){let B=L/n,I=B*l+a,k=Math.sin(I),X=Math.cos(I);w.x=F*k,w.y=-P*i+m,w.z=F*X,d.push(w.x,w.y,w.z),M.set(k,R,X).normalize(),u.push(M.x,M.y,M.z),f.push(B,1-P),E.push(g++)}x.push(E)}for(let y=0;y<n;y++)for(let E=0;E<r;E++){let P=x[E][y],F=x[E+1][y],L=x[E+1][y+1],B=x[E][y+1];(t>0||E!==0)&&(h.push(P,F,B),S+=3),(e>0||E!==r-1)&&(h.push(F,L,B),S+=3)}c.addGroup(p,S,0),p+=S}function T(M){let w=g,S=new _t,R=new C,y=0,E=M===!0?t:e,P=M===!0?1:-1;for(let L=1;L<=n;L++)d.push(0,m*P,0),u.push(0,P,0),f.push(.5,.5),g++;let F=g;for(let L=0;L<=n;L++){let I=L/n*l+a,k=Math.cos(I),X=Math.sin(I);R.x=E*X,R.y=m*P,R.z=E*k,d.push(R.x,R.y,R.z),u.push(0,P,0),S.x=k*.5+.5,S.y=X*.5*P+.5,f.push(S.x,S.y),g++}for(let L=0;L<n;L++){let B=w+L,I=F+L;M===!0?h.push(I,I+1,B):h.push(I+1,I,B),y+=3}c.addGroup(p,y,M===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},tr=class s extends ke{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},La=class s extends _e{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};let r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(r.slice(),3)),this.setAttribute("uv",new Yt(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let T=new C,M=new C,w=new C;for(let S=0;S<e.length;S+=3)f(e[S+0],T),f(e[S+1],M),f(e[S+2],w),l(T,M,w,v)}function l(v,T,M,w){let S=w+1,R=[];for(let y=0;y<=S;y++){R[y]=[];let E=v.clone().lerp(M,y/S),P=T.clone().lerp(M,y/S),F=S-y;for(let L=0;L<=F;L++)L===0&&y===S?R[y][L]=E:R[y][L]=E.clone().lerp(P,L/F)}for(let y=0;y<S;y++)for(let E=0;E<2*(S-y)-1;E++){let P=Math.floor(E/2);E%2===0?(u(R[y][P+1]),u(R[y+1][P]),u(R[y][P])):(u(R[y][P+1]),u(R[y+1][P+1]),u(R[y+1][P]))}}function c(v){let T=new C;for(let M=0;M<r.length;M+=3)T.x=r[M+0],T.y=r[M+1],T.z=r[M+2],T.normalize().multiplyScalar(v),r[M+0]=T.x,r[M+1]=T.y,r[M+2]=T.z}function h(){let v=new C;for(let T=0;T<r.length;T+=3){v.x=r[T+0],v.y=r[T+1],v.z=r[T+2];let M=m(v)/2/Math.PI+.5,w=p(v)/Math.PI+.5;o.push(M,1-w)}g(),d()}function d(){for(let v=0;v<o.length;v+=6){let T=o[v+0],M=o[v+2],w=o[v+4],S=Math.max(T,M,w),R=Math.min(T,M,w);S>.9&&R<.1&&(T<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),w<.2&&(o[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,T){let M=v*3;T.x=t[M+0],T.y=t[M+1],T.z=t[M+2]}function g(){let v=new C,T=new C,M=new C,w=new C,S=new _t,R=new _t,y=new _t;for(let E=0,P=0;E<r.length;E+=9,P+=6){v.set(r[E+0],r[E+1],r[E+2]),T.set(r[E+3],r[E+4],r[E+5]),M.set(r[E+6],r[E+7],r[E+8]),S.set(o[P+0],o[P+1]),R.set(o[P+2],o[P+3]),y.set(o[P+4],o[P+5]),w.copy(v).add(T).add(M).divideScalar(3);let F=m(w);x(S,P+0,v,F),x(R,P+2,T,F),x(y,P+4,M,F)}}function x(v,T,M,w){w<0&&v.x===1&&(o[T]=v.x-1),M.x===0&&M.z===0&&(o[T]=w/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.vertices,t.indices,t.radius,t.detail)}};var er=class s extends La{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new s(t.radius,t.detail)}},Di=class s extends _e{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,d=t/a,u=e/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*u-o;for(let T=0;T<c;T++){let M=T*d-r;g.push(M,-v,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let T=v+c*p,M=v+c*(p+1),w=v+1+c*(p+1),S=v+1+c*p;f.push(T,M,S),f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},wn=class s extends _e{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);let a=[],l=[],c=[],h=[],d=t,u=(e-t)/n,f=new C,g=new _t;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){let p=r+m/i*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<n;x++){let m=x*(i+1);for(let p=0;p<i;p++){let v=p+m,T=v,M=v+i+1,w=v+i+2,S=v+1;a.push(T,M,S),a.push(M,w,S)}}this.setIndex(a),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ai=class s extends _e{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new C,u=new C,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],T=p/i,M=o+T*a,w=t*Math.cos(M),S=Math.sqrt(t*t-w*w),R=0;p===0&&o===0?R=.5/e:p===i&&l===Math.PI&&(R=-.5/e);for(let y=0;y<=e;y++){let E=y/e,P=n+E*r;d.x=-S*Math.cos(P),d.y=w,d.z=S*Math.sin(P),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+R,1-T),v.push(c++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){let T=h[p][v+1],M=h[p][v],w=h[p+1][v],S=h[p+1][v+1];(p!==0||o>0)&&f.push(T,M,S),(p!==i-1||l<Math.PI)&&f.push(M,w,S)}this.setIndex(f),this.setAttribute("position",new Yt(g,3)),this.setAttribute("normal",new Yt(x,3)),this.setAttribute("uv",new Yt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var us=class s extends _e{constructor(t=1,e=.4,i=12,n=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:n,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new C,f=new C,g=new C;for(let x=0;x<=i;x++){let m=o+x/i*a;for(let p=0;p<=n;p++){let v=p/n*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/n),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let p=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,T=(n+1)*(x-1)+m,M=(n+1)*x+m;l.push(p,v,M),l.push(v,T,M)}this.setIndex(l),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function ps(s){let t={};for(let e in s){t[e]={};for(let i in s[e]){let n=s[e][i];if(Ru(n))n.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone();else if(Array.isArray(n))if(Ru(n[0])){let r=[];for(let o=0,a=n.length;o<a;o++)r[o]=n[o].clone();t[e][i]=r}else t[e][i]=n.slice();else t[e][i]=n}}return t}function li(s){let t={};for(let e=0;e<s.length;e++){let i=ps(s[e]);for(let n in i)t[n]=i[n]}return t}function Ru(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function pp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function uh(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}var An={clone:ps,merge:li},mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,De=class extends Li{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mp,this.fragmentShader=gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ps(t.uniforms),this.uniformsGroups=pp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let n in this.uniforms){let o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let n=t.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=e[n.value]||null;break;case"c":this.uniforms[i].value=new rt().setHex(n.value);break;case"v2":this.uniforms[i].value=new _t().fromArray(n.value);break;case"v3":this.uniforms[i].value=new C().fromArray(n.value);break;case"v4":this.uniforms[i].value=new Ce().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Bt().fromArray(n.value);break;case"m4":this.uniforms[i].value=new de().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ir=class extends De{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ae=class extends Li{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Zr=class extends Li{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_o,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=$a,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Da=class extends Li{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends Li{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Os(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Bc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Wn=class{constructor(t,e,i,n){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,n=e[i],r=e[i-1];i:{t:{let o;e:{n:if(!(t<n)){for(let a=i+2;;){if(n===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=n,n=e[++i],t<n)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break i}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(n=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,t,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=t*n;for(let o=0;o!==n;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ua=class extends Wn{constructor(t,e,i,n){super(t,e,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(t,e,i){let n=this.parameterPositions,r=t-2,o=t+1,a=n[r],l=n[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gc:r=t,a=2*e-i;break;case Wc:r=n.length-2,a=e+n[r]-n[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gc:o=t,l=2*i-e;break;case Wc:o=1,l=i+n[1]-n[0];break;default:o=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(n-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,v=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,T=(-1-f)*m+(1.5+f)*x+.5*g,M=f*m-f*x;for(let w=0;w!==a;++w)r[w]=p*o[h+w]+v*o[c+w]+T*o[l+w]+M*o[d+w];return r}},Fa=class extends Wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(i-e)/(n-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},za=class extends Wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t){return this.copySampleValue_(t-1)}},ka=class extends Wn{interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(n-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=f*u+g*2,v=d[p],T=d[p+1],M=t*u+g*2,w=h[M],S=h[M+1],R=_p(i,e,v,w,n);r[g]=vd(R,x,T,S,m)}return r}};function vd(s,t,e,i,n){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*i+s*s*s*n}function xp(s,t,e,i,n){let r=1-s;return 3*r*r*(e-t)+6*r*s*(i-e)+3*s*s*(n-i)}function _p(s,t,e,i,n){let r=(s-t)/(n-t);for(let o=0;o<8;o++){let a=vd(r,t,e,i,n)-s;if(Math.abs(a)<1e-10)break;let l=xp(r,t,e,i,n);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var wi=class{constructor(t,e,i,n){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let n=t.getInterpolation();n!==t.DefaultInterpolation&&(i.interpolation=n),Bc(t.settings)&&(i.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ir:e=this.InterpolantFactoryMethodDiscrete;break;case Ma:e=this.InterpolantFactoryMethodLinear;break;case ua:e=this.InterpolantFactoryMethodSmooth;break;case Hc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return zt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ir;case this.InterpolantFactoryMethodLinear:return Ma;case this.InterpolantFactoryMethodSmooth:return ua;case this.InterpolantFactoryMethodBezier:return Hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,n=e.length;i!==n;++i)e[i]*=t;Bc(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,n=i.length,r=0,o=n-1;for(;r!==n&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==n){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,n=this.values,r=i.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){kt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){kt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(n!==void 0&&Yf(n))for(let a=0,l=n.length;a!==l;++a){let c=n[a];if(isNaN(c)){kt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ua,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(n)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,n=new i(this.name,t,e);return n.createInterpolant=this.createInterpolant,Bc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Cu(s,t){for(let e=0,i=s.length;e!==i;e+=2)s[e]*=t}wi.prototype.ValueTypeName="";wi.prototype.TimeBufferType=Float32Array;wi.prototype.ValueBufferType=Float32Array;wi.prototype.DefaultInterpolation=Ma;var Xn=class extends wi{constructor(t,e,i){super(t,e,i)}};Xn.prototype.ValueTypeName="bool";Xn.prototype.ValueBufferType=Array;Xn.prototype.DefaultInterpolation=Ir;Xn.prototype.InterpolantFactoryMethodLinear=void 0;Xn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ba=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Ba.prototype.ValueTypeName="color";var Oa=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Oa.prototype.ValueTypeName="number";var Ha=class extends Wn{constructor(t,e,i,n){super(t,e,i,n)}interpolate_(t,e,i,n){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(n-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ii.slerpFlat(r,0,o,c-a,o,c,l);return r}},Jr=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};Jr.prototype.ValueTypeName="quaternion";Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var qn=class extends wi{constructor(t,e,i){super(t,e,i)}};qn.prototype.ValueTypeName="string";qn.prototype.ValueBufferType=Array;qn.prototype.DefaultInterpolation=Ir;qn.prototype.InterpolantFactoryMethodLinear=void 0;qn.prototype.InterpolantFactoryMethodSmooth=void 0;var Va=class extends wi{constructor(t,e,i,n){super(t,e,i,n)}};Va.prototype.ValueTypeName="vector";var Ga=class{constructor(t,e,i){let n=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,r===!1&&n.onStart!==void 0&&n.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,n.onProgress!==void 0&&n.onProgress(h,o,a),o===a&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Md=new Ga,Wa=class{constructor(t){this.manager=t!==void 0?t:Md,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(n,r){i.load(t,n,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Wa.DEFAULT_MATERIAL_NAME="__DEFAULT";var nr=class extends Pe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Yn=class extends nr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Oc=new de,Pu=new C,Iu=new C,Kr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pu),Iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,n){Oc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Oc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=n?n.z/r.x:1,a=n?n.w/r.y:1,l=n?n.x/r.x:0,c=n?n.y/r.y:0;t.coordinateSystem===Xs||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(Oc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ca=new C,ha=new Ii,tn=new C,jr=class extends Pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ca,ha,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,tn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(ca,ha,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ca,ha,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},On=new C,Lu=new _t,Du=new _t,Ne=class extends jr{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ba*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(gc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Lu,Du),e.subVectors(Du,Lu)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gc*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qc=class extends Kr{constructor(){super(new Ne(90,1,.5,500)),this.isPointLightShadow=!0}},Tn=class extends nr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},cn=class extends jr{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yc=class extends Kr{constructor(){super(new cn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hn=class extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pe.DEFAULT_UP),this.updateMatrix(),this.target=new Pe,this.shadow=new Yc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Hs=-90,Vs=1,Xa=class extends Pe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ne(Hs,Vs,t,e);n.layers=this.layers,this.add(n);let r=new Ne(Hs,Vs,t,e);r.layers=this.layers,this.add(r);let o=new Ne(Hs,Vs,t,e);o.layers=this.layers,this.add(o);let a=new Ne(Hs,Vs,t,e);a.layers=this.layers,this.add(a);let l=new Ne(Hs,Vs,t,e);l.layers=this.layers,this.add(l);let c=new Ne(Hs,Vs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},qa=class extends Ne{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Qr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=yp.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function yp(){this._document.hidden===!1&&this.reset()}var dh="\\[\\]\\.:\\/",vp=new RegExp("["+dh+"]","g"),fh="[^"+dh+"]",Mp="[^"+dh.replace("\\.","")+"]",bp=/((?:WC+[\/:])*)/.source.replace("WC",fh),Sp=/(WCOD+)?/.source.replace("WCOD",Mp),wp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fh),Tp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fh),Ep=new RegExp("^"+bp+Sp+wp+Tp+"$"),Ap=["material","materials","bones","map"],$c=class{constructor(t,e,i){let n=i||Ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,n)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Ee=class s{constructor(t,e,i){this.path=e,this.parsedPath=i||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,i):new s(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vp,"")}static parseTrackName(t){let e=Ep.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);Ap.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},n=i(t.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)t[e++]=i[n]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,n=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[n];if(o===void 0){let c=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ee.Composite=$c;Ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ee.prototype.GetterByBindingType=[Ee.prototype._getValue_direct,Ee.prototype._getValue_array,Ee.prototype._getValue_arrayElement,Ee.prototype._getValue_toArray];Ee.prototype.SetterByBindingTypeAndVersioning=[[Ee.prototype._setValue_direct,Ee.prototype._setValue_direct_setNeedsUpdate,Ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_array,Ee.prototype._setValue_array_setNeedsUpdate,Ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_arrayElement,Ee.prototype._setValue_arrayElement_setNeedsUpdate,Ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ee.prototype._setValue_fromArray,Ee.prototype._setValue_fromArray_setNeedsUpdate,Ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);var Nu=new de,to=class{constructor(t,e,i=0,n=1/0){this.ray=new hs(t,e),this.near=i,this.far=n,this.camera=null,this.layers=new $s,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(t,e=!0,i=[]){return Zc(t,this,i,e),i.sort(Uu),i}intersectObjects(t,e=!0,i=[]){for(let n=0,r=t.length;n<r;n++)Zc(t[n],this,i,e);return i.sort(Uu),i}};function Uu(s,t){return s.distance-t.distance}function Zc(s,t,e,i){let n=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let o=0,a=r.length;o<a;o++)Zc(r[o],t,e,!0)}}var Jc=class s{static{s.prototype.isMatrix2=!0}constructor(t,e,i,n){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,n){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=n,this}};var eo=class extends Ca{constructor(t=10,e=10,i=4473924,n=8947848){i=new rt(i),n=new rt(n);let r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,f=0,g=-a;u<=e;u++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);let x=u===r?i:n;x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3,x.toArray(c,f),f+=3}let h=new _e;h.setAttribute("position",new Yt(l,3)),h.setAttribute("color",new Yt(c,3));let d=new Wr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}};function ph(s,t,e,i){let n=Rp(i);switch(e){case ah:return s*t;case el:return s*t/n.components*n.byteLength;case il:return s*t/n.components*n.byteLength;case Qn:return s*t*2/n.components*n.byteLength;case nl:return s*t*2/n.components*n.byteLength;case lh:return s*t*3/n.components*n.byteLength;case Fi:return s*t*4/n.components*n.byteLength;case sl:return s*t*4/n.components*n.byteLength;case uo:case fo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case po:case mo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ol:case ll:return Math.max(s,16)*Math.max(t,8)/4;case rl:case al:return Math.max(s,8)*Math.max(t,8)/2;case cl:case hl:case dl:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ul:case go:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case xl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case _l:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case yl:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case vl:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ml:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case bl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Sl:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case wl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Tl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case El:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Al:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Rl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Cl:case Pl:case Il:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ll:case Dl:return Math.ceil(s/4)*Math.ceil(t/4)*8;case xo:case Nl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rp(s){switch(s){case yi:case nh:return{byteLength:1,components:1};case rr:case sh:case ei:return{byteLength:2,components:1};case Qa:case tl:return{byteLength:2,components:4};case qi:case ja:case Ui:return{byteLength:4,components:1};case rh:case oh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Gd(){let s=null,t=!1,e=null,i=null;function n(r,o){i=s.requestAnimationFrame(n),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Dp(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}var Np=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Gp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$p=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,tm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,em=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,sm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",um=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,pm=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mm=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Em=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Im=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Lm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,zm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Om=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Wm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$m=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Km=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,h0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,p0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,m0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,g0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,A0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,I0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,D0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,N0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,H0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,X0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ig=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ng=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ag=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:Np,alphahash_pars_fragment:Up,alphamap_fragment:Fp,alphamap_pars_fragment:zp,alphatest_fragment:kp,alphatest_pars_fragment:Bp,aomap_fragment:Op,aomap_pars_fragment:Hp,batching_pars_vertex:Vp,batching_vertex:Gp,begin_vertex:Wp,beginnormal_vertex:Xp,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:$p,clipping_planes_fragment:Zp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:jp,color_fragment:Qp,color_pars_fragment:tm,color_pars_vertex:em,color_vertex:im,common:nm,cube_uv_reflection_fragment:sm,defaultnormal_vertex:rm,displacementmap_pars_vertex:om,displacementmap_vertex:am,emissivemap_fragment:lm,emissivemap_pars_fragment:cm,colorspace_fragment:hm,colorspace_pars_fragment:um,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Em,envmap_vertex:gm,fog_vertex:xm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:vm,gradientmap_pars_fragment:Mm,lightmap_pars_fragment:bm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:wm,lights_pars_begin:Tm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Im,lights_physical_pars_fragment:Lm,lights_fragment_begin:Dm,lights_fragment_maps:Nm,lights_fragment_end:Um,lightprobes_pars_fragment:Fm,logdepthbuf_fragment:zm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:Om,map_fragment:Hm,map_pars_fragment:Vm,map_particle_fragment:Gm,map_particle_pars_fragment:Wm,metalnessmap_fragment:Xm,metalnessmap_pars_fragment:qm,morphinstance_vertex:Ym,morphcolor_vertex:$m,morphnormal_vertex:Zm,morphtarget_pars_vertex:Jm,morphtarget_vertex:Km,normal_fragment_begin:jm,normal_fragment_maps:Qm,normal_pars_fragment:t0,normal_pars_vertex:e0,normal_vertex:i0,normalmap_pars_fragment:n0,clearcoat_normal_fragment_begin:s0,clearcoat_normal_fragment_maps:r0,clearcoat_pars_fragment:o0,iridescence_pars_fragment:a0,opaque_fragment:l0,packing:c0,premultiplied_alpha_fragment:h0,project_vertex:u0,dithering_fragment:d0,dithering_pars_fragment:f0,roughnessmap_fragment:p0,roughnessmap_pars_fragment:m0,shadowmap_pars_fragment:g0,shadowmap_pars_vertex:x0,shadowmap_vertex:_0,shadowmask_pars_fragment:y0,skinbase_vertex:v0,skinning_pars_vertex:M0,skinning_vertex:b0,skinnormal_vertex:S0,specularmap_fragment:w0,specularmap_pars_fragment:T0,tonemapping_fragment:E0,tonemapping_pars_fragment:A0,transmission_fragment:R0,transmission_pars_fragment:C0,uv_pars_fragment:P0,uv_pars_vertex:I0,uv_vertex:L0,worldpos_vertex:D0,background_vert:N0,background_frag:U0,backgroundCube_vert:F0,backgroundCube_frag:z0,cube_vert:k0,cube_frag:B0,depth_vert:O0,depth_frag:H0,distance_vert:V0,distance_frag:G0,equirect_vert:W0,equirect_frag:X0,linedashed_vert:q0,linedashed_frag:Y0,meshbasic_vert:$0,meshbasic_frag:Z0,meshlambert_vert:J0,meshlambert_frag:K0,meshmatcap_vert:j0,meshmatcap_frag:Q0,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ig,meshphong_frag:ng,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},ft={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Bt}},envmap:{envMap:{value:null},envMapRotation:{value:new Bt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Bt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0},uvTransform:{value:new Bt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Bt},alphaMap:{value:null},alphaMapTransform:{value:new Bt},alphaTest:{value:0}}},fn={basic:{uniforms:li([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:li([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:li([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:li([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:li([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new rt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:li([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:li([ft.points,ft.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:li([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:li([ft.common,ft.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:li([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:li([ft.sprite,ft.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new Bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Bt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distance:{uniforms:li([ft.common,ft.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distance_vert,fragmentShader:Gt.distance_frag},shadow:{uniforms:li([ft.lights,ft.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};fn.physical={uniforms:li([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Bt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Bt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Bt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Bt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Bt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Bt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Bt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};var zl={r:0,b:0,g:0},pg=new de,Wd=new Bt;Wd.set(-1,0,0,0,1,0,0,0,1);function mg(s,t,e,i,n,r){let o=new rt(0),a=n===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let T=v.isScene===!0?v.background:null;if(T&&T.isTexture){let M=v.backgroundBlurriness>0;T=t.get(T,M)}return T}function g(v){let T=!1,M=f(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),T=!0);let w=s.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||T)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,T){let M=f(T);M&&(M.isCubeTexture||M.mapping===co)?(c===void 0&&(c=new ot(new Fe(1,1,1),new De({name:"BackgroundCubeMaterial",uniforms:ps(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wd),c.material.toneMapped=qt.getTransfer(M.colorSpace)!==oe,(h!==M||d!==M.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ot(new Di(2,2),new De({name:"BackgroundMaterial",uniforms:ps(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qt.getTransfer(M.colorSpace)!==oe,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,T){v.getRGB(zl,uh(s)),e.buffers.color.setClear(zl.r,zl.g,zl.b,T,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,T=1){o.set(v),a=T,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function gg(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=u(null),r=n,o=!1;function a(F,L,B,I,k){let X=!1,W=d(F,I,B,L);r!==W&&(r=W,c(r.object)),X=f(F,I,B,k),X&&g(F,I,B,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(F,L,B,I),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(F){return s.bindVertexArray(F)}function h(F){return s.deleteVertexArray(F)}function d(F,L,B,I){let k=I.wireframe===!0,X=i[L.id];X===void 0&&(X={},i[L.id]=X);let W=F.isInstancedMesh===!0?F.id:0,it=X[W];it===void 0&&(it={},X[W]=it);let q=it[B.id];q===void 0&&(q={},it[B.id]=q);let j=q[k];return j===void 0&&(j=u(l()),q[k]=j),j}function u(F){let L=[],B=[],I=[];for(let k=0;k<e;k++)L[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:F,attributes:{},index:null}}function f(F,L,B,I){let k=r.attributes,X=L.attributes,W=0,it=B.getAttributes();for(let q in it)if(it[q].location>=0){let Q=k[q],Ct=X[q];if(Ct===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Ct=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Ct=F.instanceColor)),Q===void 0||Q.attribute!==Ct||Ct&&Q.data!==Ct.data)return!0;W++}return r.attributesNum!==W||r.index!==I}function g(F,L,B,I){let k={},X=L.attributes,W=0,it=B.getAttributes();for(let q in it)if(it[q].location>=0){let Q=X[q];Q===void 0&&(q==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),q==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor));let Ct={};Ct.attribute=Q,Q&&Q.data&&(Ct.data=Q.data),k[q]=Ct,W++}r.attributes=k,r.attributesNum=W,r.index=I}function x(){let F=r.newAttributes;for(let L=0,B=F.length;L<B;L++)F[L]=0}function m(F){p(F,0)}function p(F,L){let B=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;B[F]=1,I[F]===0&&(s.enableVertexAttribArray(F),I[F]=1),k[F]!==L&&(s.vertexAttribDivisor(F,L),k[F]=L)}function v(){let F=r.newAttributes,L=r.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==F[B]&&(s.disableVertexAttribArray(B),L[B]=0)}function T(F,L,B,I,k,X,W){W===!0?s.vertexAttribIPointer(F,L,B,k,X):s.vertexAttribPointer(F,L,B,I,k,X)}function M(F,L,B,I){x();let k=I.attributes,X=B.getAttributes(),W=L.defaultAttributeValues;for(let it in X){let q=X[it];if(q.location>=0){let j=k[it];if(j===void 0&&(it==="instanceMatrix"&&F.instanceMatrix&&(j=F.instanceMatrix),it==="instanceColor"&&F.instanceColor&&(j=F.instanceColor)),j!==void 0){let Q=j.normalized,Ct=j.itemSize,Dt=t.get(j);if(Dt===void 0)continue;let Me=Dt.buffer,ne=Dt.type,le=Dt.bytesPerElement,$=ne===s.INT||ne===s.UNSIGNED_INT||j.gpuType===ja;if(j.isInterleavedBufferAttribute){let tt=j.data,bt=tt.stride,Ot=j.offset;if(tt.isInstancedInterleavedBuffer){for(let vt=0;vt<q.locationSize;vt++)p(q.location+vt,tt.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let vt=0;vt<q.locationSize;vt++)m(q.location+vt);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let vt=0;vt<q.locationSize;vt++)T(q.location+vt,Ct/q.locationSize,ne,Q,bt*le,(Ot+Ct/q.locationSize*vt)*le,$)}else{if(j.isInstancedBufferAttribute){for(let tt=0;tt<q.locationSize;tt++)p(q.location+tt,j.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let tt=0;tt<q.locationSize;tt++)m(q.location+tt);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let tt=0;tt<q.locationSize;tt++)T(q.location+tt,Ct/q.locationSize,ne,Q,Ct*le,Ct/q.locationSize*tt*le,$)}}else if(W!==void 0){let Q=W[it];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}v()}function w(){E();for(let F in i){let L=i[F];for(let B in L){let I=L[B];for(let k in I){let X=I[k];for(let W in X)h(X[W].object),delete X[W];delete I[k]}}delete i[F]}}function S(F){if(i[F.id]===void 0)return;let L=i[F.id];for(let B in L){let I=L[B];for(let k in I){let X=I[k];for(let W in X)h(X[W].object),delete X[W];delete I[k]}}delete i[F.id]}function R(F){for(let L in i){let B=i[L];for(let I in B){let k=B[I];if(k[F.id]===void 0)continue;let X=k[F.id];for(let W in X)h(X[W].object),delete X[W];delete k[F.id]}}}function y(F){for(let L in i){let B=i[L],I=F.isInstancedMesh===!0?F.id:0,k=B[I];if(k!==void 0){for(let X in k){let W=k[X];for(let it in W)h(W[it].object),delete W[it];delete k[X]}delete B[I],Object.keys(B).length===0&&delete i[L]}}}function E(){P(),o=!0,r!==n&&(r=n,c(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function xg(s,t,e){let i;function n(l){i=l}function r(l,c){s.drawArrays(i,l,c),e.update(c,i,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function _g(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(R){return!(R!==Fi&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let y=R===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==yi&&R!==Ui&&!y&&i.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),w=s.getParameter(s.MAX_SAMPLES),S=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:S}}function yg(s){let t=this,e=null,i=0,n=!1,r=!1,o=new Si,a=new Bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=s.get(d);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:i,T=v*4,M=p.clippingState||null;l.value=M,M=h(g,u,T,f);for(let w=0;w!==T;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=f+x*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=f;T!==x;++T,M+=4)o.copy(d[T]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var lr=4,vg=6,Mg=20,bg=256,yo=new cn,bd=new rt,mh=null,gh=0,xh=0,_h=!1,Sg=new C,ms=new C,hr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,n=100,r={}){let{size:o=256,position:a=Sg}=r;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,n,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Td(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,xh),this._renderer.xr.enabled=_h,t.scissorTest=!1,ar(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Jn||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),xh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ve,minFilter:Ve,generateMipmaps:!1,type:ei,format:Fi,colorSpace:Lr,depthBuffer:!1},n=Sd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=wg(r)),this._blurMaterial=Eg(r,t,e),this._ggxMaterial=Tg(r,t,e)}return n}_compileMaterial(t){let e=new ot(new _e,t);this._renderer.compile(e,yo)}_sceneToCubeUV(t,e,i,n,r){let l=new Ne(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(bd),d.toneMapping=Xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ot(new Fe,new Qt({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(bd),p=!0);for(let T=0;T<6;T++){let M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let w=this._cubeSize;ar(n,M*w,T>2?w:0,w,w),d.setRenderTarget(n),p&&d.render(x,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=v}_textureToCubeUV(t,e){let i=this._renderer,n=t.mapping===Jn||t.mapping===fs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Td()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wd());let r=n?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;ar(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,yo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let n=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-lr?i-g+lr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,ar(r,m,p,3*x,2*x),n.setRenderTarget(r),n.render(a,yo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,ar(t,m,p,3*x,2*x),n.setRenderTarget(t),n.render(a,yo)}_blur(t,e,i,n){let r=this._pingPongRenderTarget,o=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,n,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[n];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-lr?n-this._lodMax+lr:0),u=4*(this._cubeSize-h);ar(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,yo)}};function wg(s){let t=[],e=[],i=s,n=s-lr+1+vg;for(let r=0;r<n;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let v=p%3*2/3-1,T=p>2?0:-1,M=[v,T,0,v+2/3,T,0,v+2/3,T+1,0,v,T,0,v+2/3,T+1,0,v,T+1,0];g.set(M,f*u*p);for(let w=0;w<u;w++){let S=h[w*2]*2-1,R=h[w*2+1]*2-1;p===0?ms.set(1,R,S):p===1?ms.set(-S,1,-R):p===2?ms.set(-S,R,1):p===3?ms.set(-1,R,-S):p===4?ms.set(-S,-1,R):ms.set(S,R,-1),ms.toArray(x,(p*u+w)*f)}}let m=new _e;m.setAttribute("position",new Le(g,f)),m.setAttribute("outputDirection",new Le(x,f)),e.push(new ot(m,null)),i>lr&&i--}return{lodMeshes:e,sizeLods:t}}function Sd(s,t,e){let i=new Ue(s,t,e);return i.texture.mapping=co,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ar(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Tg(s,t,e){return new De({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:bg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Eg(s,t,e){return new De({name:"SphericalGaussianBlur",defines:{SAMPLES:Mg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ol(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function wd(){return new De({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Td(){return new De({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Ol(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Bl=class extends Ue{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new qr(n),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Fe(5,5,5),r=new De({name:"CubemapFromEquirect",uniforms:ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Ni});r.uniforms.tEquirect.value=e;let o=new ot(n,r),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ve),new Xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,n=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}};function Ag(s){let t=new WeakMap,e=new WeakMap,i=null;function n(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Za||f===Ja)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Bl(g.height);return x.fromEquirectangularTexture(s,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Za||f===Ja,x=f===Jn||f===fs;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new hr(s)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return g&&v&&v.height>0||x&&v&&l(v)?(i===null&&(i=new hr(s)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Za?u.mapping=Jn:f===Ja&&(u.mapping=fs),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:d}}function Rg(s){let t={};function e(i){if(t[i]!==void 0)return t[i];let n=s.getExtension(i);return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let n=e(i);return n===null&&cs("WebGLRenderer: "+i+" extension not supported."),n}}}function Cg(s,t,e,i){let n={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete n[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return n[u.id]===!0||(u.addEventListener("dispose",o),n[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let T=0,M=v.length;T<M;T+=3){let w=v[T+0],S=v[T+1],R=v[T+2];u.push(w,S,S,R,R,w)}}else{let v=g.array;x=g.version;for(let T=0,M=v.length/3-1;T<M;T+=3){let w=T+0,S=T+1,R=T+2;u.push(w,S,S,R,R,w)}}let m=new(g.count>=65535?Br:kr)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function Pg(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(i,u,r,d*o),e.update(u,i,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,i,1)}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ig(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:kt("WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Lg(s,t,e){let i=new WeakMap,n=new Ce;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(a);if(u===void 0||u.count!==d){let E=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;f===!0&&(T=1),g===!0&&(T=2),x===!0&&(T=3);let M=a.attributes.position.count*T,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let S=new Float32Array(M*w*4*d),R=new Fr(S,M,w,d);R.type=Ui,R.needsUpdate=!0;let y=T*4;for(let P=0;P<d;P++){let F=m[P],L=p[P],B=v[P],I=M*w*4*P;for(let k=0;k<F.count;k++){let X=k*y;f===!0&&(n.fromBufferAttribute(F,k),S[I+X+0]=n.x,S[I+X+1]=n.y,S[I+X+2]=n.z,S[I+X+3]=0),g===!0&&(n.fromBufferAttribute(L,k),S[I+X+4]=n.x,S[I+X+5]=n.y,S[I+X+6]=n.z,S[I+X+7]=0),x===!0&&(n.fromBufferAttribute(B,k),S[I+X+8]=n.x,S[I+X+9]=n.y,S[I+X+10]=n.z,S[I+X+11]=B.itemSize===4?n.w:1)}}u={count:d,texture:R,size:new _t(M,w)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Dg(s,t,e,i,n){let r=new WeakMap;function o(c){let h=n.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Ng={[no]:"LINEAR_TONE_MAPPING",[so]:"REINHARD_TONE_MAPPING",[ro]:"CINEON_TONE_MAPPING",[un]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[lo]:"NEUTRAL_TONE_MAPPING",[oo]:"CUSTOM_TONE_MAPPING"};function Ug(s,t,e,i,n,r){let o=new Ue(t,e,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new _e;c.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Yt([0,2,0,0,2,0],2));let h=new ir({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ot(c,h),u=new cn(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,v=[],T=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let S=0;S<v.length;S++){let R=v[S];R.setSize&&R.setSize(M,w)}},this.setEffects=function(M){v=M,T=v.length>0&&v[0].isRenderPass===!0;let w=o.width,S=o.height;v.length>0&&a===null&&(a=new Ue(w,S,{type:ei,depthBuffer:!1,stencilBuffer:!1}),l=new Ue(w,S,{type:ei,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let y=v[R];y.setSize&&y.setSize(w,S)}},this.begin=function(M,w){if(x||M.toneMapping===Xi&&v.length===0)return!1;if(p=w,w!==null){let S=w.width,R=w.height;(o.width!==S||o.height!==R)&&this.setSize(S,R)}return T===!1&&M.setRenderTarget(o),m=M.toneMapping,M.toneMapping=Xi,!0},this.hasRenderPass=function(){return T},this.end=function(M,w){M.toneMapping=m,x=!0;let S=o,R=a;for(let y=0;y<v.length;y++){let E=v[y];E.enabled!==!1&&(E.render(M,R,S,w),E.needsSwap!==!1&&(S=R,R=R===a?l:a))}if(f!==M.outputColorSpace||g!==M.toneMapping){f=M.outputColorSpace,g=M.toneMapping,h.defines={},qt.getTransfer(f)===oe&&(h.defines.SRGB_TRANSFER="");let y=Ng[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Xd=new mi,Mh=new Gn(1,1),qd=new Fr,Yd=new Ta,$d=new qr,Ed=[],Ad=[],Rd=new Float32Array(16),Cd=new Float32Array(9),Pd=new Float32Array(4);function ur(s,t,e){let i=s[0];if(i<=0||i>0)return s;let n=t*e,r=Ed[n];if(r===void 0&&(r=new Float32Array(n),Ed[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function qe(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function Ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function Hl(s,t){let e=Ad[t];e===void 0&&(e=new Int32Array(t),Ad[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function Fg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2fv(this.addr,t),Ye(e,t)}}function kg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;s.uniform3fv(this.addr,t),Ye(e,t)}}function Bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4fv(this.addr,t),Ye(e,t)}}function Og(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Pd.set(i),s.uniformMatrix2fv(this.addr,!1,Pd),Ye(e,i)}}function Hg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Cd.set(i),s.uniformMatrix3fv(this.addr,!1,Cd),Ye(e,i)}}function Vg(s,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Rd.set(i),s.uniformMatrix4fv(this.addr,!1,Rd),Ye(e,i)}}function Gg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2iv(this.addr,t),Ye(e,t)}}function Xg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3iv(this.addr,t),Ye(e,t)}}function qg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4iv(this.addr,t),Ye(e,t)}}function Yg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function $g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;s.uniform2uiv(this.addr,t),Ye(e,t)}}function Zg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;s.uniform3uiv(this.addr,t),Ye(e,t)}}function Jg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;s.uniform4uiv(this.addr,t),Ye(e,t)}}function Kg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Mh.compareFunction=e.isReversedDepthBuffer()?Fl:Ul,r=Mh):r=Xd,e.setTexture2D(t||r,n)}function jg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||Yd,n)}function Qg(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||$d,n)}function tx(s,t,e){let i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||qd,n)}function ex(s){switch(s){case 5126:return Fg;case 35664:return zg;case 35665:return kg;case 35666:return Bg;case 35674:return Og;case 35675:return Hg;case 35676:return Vg;case 5124:case 35670:return Gg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return $g;case 36295:return Zg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Kg;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return tx}}function ix(s,t){s.uniform1fv(this.addr,t)}function nx(s,t){let e=ur(t,this.size,2);s.uniform2fv(this.addr,e)}function sx(s,t){let e=ur(t,this.size,3);s.uniform3fv(this.addr,e)}function rx(s,t){let e=ur(t,this.size,4);s.uniform4fv(this.addr,e)}function ox(s,t){let e=ur(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ax(s,t){let e=ur(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function lx(s,t){let e=ur(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function cx(s,t){s.uniform1iv(this.addr,t)}function hx(s,t){s.uniform2iv(this.addr,t)}function ux(s,t){s.uniform3iv(this.addr,t)}function dx(s,t){s.uniform4iv(this.addr,t)}function fx(s,t){s.uniform1uiv(this.addr,t)}function px(s,t){s.uniform2uiv(this.addr,t)}function mx(s,t){s.uniform3uiv(this.addr,t)}function gx(s,t){s.uniform4uiv(this.addr,t)}function xx(s,t,e){let i=this.cache,n=t.length,r=Hl(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Mh:o=Xd;for(let a=0;a!==n;++a)e.setTexture2D(t[a]||o,r[a])}function _x(s,t,e){let i=this.cache,n=t.length,r=Hl(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||Yd,r[o])}function yx(s,t,e){let i=this.cache,n=t.length,r=Hl(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||$d,r[o])}function vx(s,t,e){let i=this.cache,n=t.length,r=Hl(e,n);qe(i,r)||(s.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||qd,r[o])}function Mx(s){switch(s){case 5126:return ix;case 35664:return nx;case 35665:return sx;case 35666:return rx;case 35674:return ox;case 35675:return ax;case 35676:return lx;case 5124:case 35670:return cx;case 35667:case 35671:return hx;case 35668:case 35672:return ux;case 35669:case 35673:return dx;case 5125:return fx;case 36294:return px;case 36295:return mx;case 36296:return gx;case 35678:case 36198:case 36298:case 36306:case 35682:return xx;case 35679:case 36299:case 36307:return _x;case 35680:case 36300:case 36308:case 36293:return yx;case 36289:case 36303:case 36311:case 36292:return vx}}var bh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=ex(e.type)}},Sh=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mx(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let n=this.seq;for(let r=0,o=n.length;r!==o;++r){let a=n[r];a.setValue(t,e[a.id],i)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Id(s,t){s.seq.push(t),s.map[t.id]=t}function bx(s,t,e){let i=s.name,n=i.length;for(yh.lastIndex=0;;){let r=yh.exec(i),o=yh.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){Id(e,c===void 0?new bh(a,s,t):new Sh(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new wh(a),Id(e,d)),e=d}}}var cr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);bx(a,l,this)}let n=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?n.push(o):r.push(o);n.length>0&&(this.seq=n.concat(r))}setValue(t,e,i,n){let r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){let n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){let i=[];for(let n=0,r=t.length;n!==r;++n){let o=t[n];o.id in e&&i.push(o)}return i}};function Ld(s,t,e){let i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}var Sx=37297,wx=0;function Tx(s,t){let e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var Dd=new Bt;function Ex(s){qt._getMatrix(Dd,qt.workingColorSpace,s);let t=`mat3( ${Dd.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case Dr:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nd(s,t,e){let i=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Tx(s.getShaderSource(t),a)}else return r}function Ax(s,t){let e=Ex(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Rx={[no]:"Linear",[so]:"Reinhard",[ro]:"Cineon",[un]:"ACESFilmic",[ao]:"AgX",[lo]:"Neutral",[oo]:"Custom"};function Cx(s,t){let e=Rx[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var kl=new C;function Px(){qt.getLuminanceCoefficients(kl);let s=kl.x.toFixed(4),t=kl.y.toFixed(4),e=kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ix(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Mo).join(`
`)}function Lx(s){let t=[];for(let e in s){let i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Dx(s,t){let e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(t,n),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Mo(s){return s!==""}function Ud(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Fd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Nx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(s){return s.replace(Nx,Fx)}var Ux=new Map;function Fx(s,t){let e=Gt[t];if(e===void 0){let i=Ux.get(t);if(i!==void 0)e=Gt[i],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Th(e)}var zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zd(s){return s.replace(zx,kx)}function kx(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function kd(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Bx={[io]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function Ox(s){return Bx[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Hx={[Jn]:"ENVMAP_TYPE_CUBE",[fs]:"ENVMAP_TYPE_CUBE",[co]:"ENVMAP_TYPE_CUBE_UV"};function Vx(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Hx[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gx={[fs]:"ENVMAP_MODE_REFRACTION"};function Wx(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Gx[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Xx={[$a]:"ENVMAP_BLENDING_MULTIPLY",[id]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function qx(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Xx[s.combine]||"ENVMAP_BLENDING_NONE"}function Yx(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function $x(s,t,e,i){let n=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ox(e),c=Vx(e),h=Wx(e),d=qx(e),u=Yx(e),f=Ix(e),g=Lx(r),x=n.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Mo).join(`
`),p.length>0&&(p+=`
`)):(m=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Mo).join(`
`),p=[kd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==Xi?Cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Ax("linearToOutputTexel",e.outputColorSpace),Px(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Mo).join(`
`)),o=Th(o),o=Ud(o,e),o=Fd(o,e),a=Th(a),a=Ud(a,e),a=Fd(a,e),o=zd(o),a=zd(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===hh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let T=v+m+o,M=v+p+a,w=Ld(n,n.VERTEX_SHADER,T),S=Ld(n,n.FRAGMENT_SHADER,M);n.attachShader(x,w),n.attachShader(x,S),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function R(F){if(s.debug.checkShaderErrors){let L=n.getProgramInfoLog(x)||"",B=n.getShaderInfoLog(w)||"",I=n.getShaderInfoLog(S)||"",k=L.trim(),X=B.trim(),W=I.trim(),it=!0,q=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(it=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,w,S);else{let j=Nd(n,w,"vertex"),Q=Nd(n,S,"fragment");kt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+k+`
`+j+`
`+Q)}else k!==""?zt("WebGLProgram: Program Info Log:",k):(X===""||W==="")&&(q=!1);q&&(F.diagnostics={runnable:it,programLog:k,vertexShader:{log:X,prefix:m},fragmentShader:{log:W,prefix:p}})}n.deleteShader(w),n.deleteShader(S),y=new cr(n,x),E=Dx(n,x)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let E;this.getAttributes=function(){return E===void 0&&R(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,Sx)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=S,this}var Zx=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let n=this._getShaderCacheForMaterial(t);return n.has(e)===!1&&(n.add(e),e.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Ah(t),e.set(t,i)),i}},Ah=class{constructor(t){this.id=Zx++,this.code=t,this.usedTimes=0}};function Jx(s){return s===Qn||s===go||s===xo}function Kx(s,t,e,i,n,r){let o=new $s,a=new Eh,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function x(y,E,P,F,L,B){let I=F.fog,k=L.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?F.environment:null,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,it=t.get(y.envMap||X,W),q=it&&it.mapping===co?it.image.height:null,j=f[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&zt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Ct=Q!==void 0?Q.length:0,Dt=0;k.morphAttributes.position!==void 0&&(Dt=1),k.morphAttributes.normal!==void 0&&(Dt=2),k.morphAttributes.color!==void 0&&(Dt=3);let Me,ne,le,$;if(j){let Se=fn[j];Me=Se.vertexShader,ne=Se.fragmentShader}else{Me=y.vertexShader,ne=y.fragmentShader;let Se=a.getVertexShaderStage(y),he=a.getFragmentShaderStage(y);a.update(y,Se,he),le=Se.id,$=he.id}let tt=s.getRenderTarget(),bt=s.state.buffers.depth.getReversed(),Ot=L.isInstancedMesh===!0,vt=L.isBatchedMesh===!0,Xt=!!y.map,Xe=!!y.matcap,$t=!!it,re=!!y.aoMap,be=!!y.lightMap,Jt=!!y.bumpMap&&y.wireframe===!1,Ae=!!y.normalMap,$e=!!y.displacementMap,xi=!!y.emissiveMap,Ie=!!y.metalnessMap,Be=!!y.roughnessMap,U=y.anisotropy>0,ni=y.clearcoat>0,me=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,V=y.transmission>0,Y=U&&!!y.anisotropyMap,st=ni&&!!y.clearcoatMap,at=ni&&!!y.clearcoatNormalMap,Z=ni&&!!y.clearcoatRoughnessMap,K=_&&!!y.iridescenceMap,lt=_&&!!y.iridescenceThicknessMap,Pt=z&&!!y.sheenColorMap,dt=z&&!!y.sheenRoughnessMap,ct=!!y.specularMap,It=!!y.specularColorMap,Ft=!!y.specularIntensityMap,Ht=V&&!!y.transmissionMap,N=V&&!!y.thicknessMap,ht=!!y.gradientMap,J=!!y.alphaMap,ut=y.alphaTest>0,gt=!!y.alphaHash,et=!!y.extensions,Nt=Xi;y.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Nt=s.toneMapping);let Et={shaderID:j,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:ne,defines:y.defines,customVertexShaderID:le,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:vt,batchingColor:vt&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,outputColorSpace:tt===null?s.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:qt.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Xt,matcap:Xe,envMap:$t,envMapMode:$t&&it.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:be,bumpMap:Jt,normalMap:Ae,displacementMap:$e,emissiveMap:xi,normalMapObjectSpace:Ae&&y.normalMapType===od,normalMapTangentSpace:Ae&&y.normalMapType===_o,packedNormalMap:Ae&&y.normalMapType===_o&&Jx(y.normalMap.format),metalnessMap:Ie,roughnessMap:Be,anisotropy:U,anisotropyMap:Y,clearcoat:ni,clearcoatMap:st,clearcoatNormalMap:at,clearcoatRoughnessMap:Z,dispersion:me,retroreflection:A,iridescence:_,iridescenceMap:K,iridescenceThicknessMap:lt,sheen:z,sheenColorMap:Pt,sheenRoughnessMap:dt,specularMap:ct,specularColorMap:It,specularIntensityMap:Ft,transmission:V,transmissionMap:Ht,thicknessMap:N,gradientMap:ht,opaque:y.transparent===!1&&y.blending===Zn&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ut,alphaHash:gt,combine:y.combine,mapUv:Xt&&g(y.map.channel),aoMapUv:re&&g(y.aoMap.channel),lightMapUv:be&&g(y.lightMap.channel),bumpMapUv:Jt&&g(y.bumpMap.channel),normalMapUv:Ae&&g(y.normalMap.channel),displacementMapUv:$e&&g(y.displacementMap.channel),emissiveMapUv:xi&&g(y.emissiveMap.channel),metalnessMapUv:Ie&&g(y.metalnessMap.channel),roughnessMapUv:Be&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:st&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:at&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:dt&&g(y.sheenRoughnessMap.channel),specularMapUv:ct&&g(y.specularMap.channel),specularColorMapUv:It&&g(y.specularColorMap.channel),specularIntensityMapUv:Ft&&g(y.specularIntensityMap.channel),transmissionMapUv:Ht&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:J&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ae||U),vertexNormals:!!k.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(Xt||J),fog:!!I,useFog:y.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||k.attributes.normal===void 0&&Ae===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Ct,morphTextureStride:Dt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Xt&&y.map.isVideoTexture===!0&&qt.getTransfer(y.map.colorSpace)===oe,decodeVideoTextureEmissive:xi&&y.emissiveMap.isVideoTexture===!0&&qt.getTransfer(y.emissiveMap.colorSpace)===oe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ke,flipSided:y.side===ti,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||vt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Et.vertexUv1s=l.has(1),Et.vertexUv2s=l.has(2),Et.vertexUv3s=l.has(3),l.clear(),Et}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)E.push(P),E.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(p(E,y),v(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function v(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function T(y){let E=f[y.type],P;if(E){let F=fn[E];P=An.clone(F.uniforms)}else P=y.uniforms;return P}function M(y,E){let P=h.get(E);return P!==void 0?++P.usedTimes:(P=new $x(s,E,y,n),c.push(P),h.set(E,P)),P}function w(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function S(y){a.remove(y)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:T,acquireProgram:M,releaseProgram:w,releaseShaderCache:S,programs:c,dispose:R}}function jx(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function Qx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Bd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Od(){let s=[],t=0,e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=o(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=m,v.group=p),t++,v}function l(u,f,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let T=a(u,f,g,x,m,p);g.transmission>0?i.push(T):g.transparent===!0?n.push(T):e.push(T)}function c(u,f,g,x,m,p){let v=a(u,f,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Qx),i.length>1&&i.sort(f||Bd),n.length>1&&n.sort(f||Bd)}function d(){for(let u=t,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:l,unshift:c,finish:d,sort:h}}function t_(){let s=new WeakMap;function t(i,n){let r=s.get(i),o;return r===void 0?(o=new Od,s.set(i,[o])):n>=r.length?(o=new Od,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function e_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new C,color:new rt};break;case"SpotLight":e={position:new C,direction:new C,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":e={color:new rt,position:new C,halfWidth:new C,halfHeight:new C};break}return s[t.id]=e,e}}}function i_(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var n_=0;function s_(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function r_(s){let t=new e_,e=i_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);let n=new C,r=new de,o=new de;function a(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,T=0,M=0,w=0,S=0,R=0,y=0,E=0,P=0;c.sort(s_);for(let L=0,B=c.length;L<B;L++){let I=c[L],k=I.color,X=I.intensity,W=I.distance,it=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qn?it=I.shadow.map.texture:it=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*X,d+=k.g*X,u+=k.b*X;else if(I.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(I.sh.coefficients[q],X);P++}else if(I.isSunLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=e.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=it;let Ct=j.getViewportCount();for(let Dt=0;Dt<Ct;Dt++)i.sunShadowMatrix[x+Dt]=j.getMatrix(Dt),i.sunShadowCascade[x+Dt]=j._cascadeData[Dt];x+=Ct,g++}i.sun[f]=q,f++}else if(I.isDirectionalLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let j=I.shadow,Q=e.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=it,i.directionalShadowMatrix[m]=I.shadow.matrix,w++}i.directional[m]=q,m++}else if(I.isSpotLight){let q=t.get(I);q.position.setFromMatrixPosition(I.matrixWorld),q.color.copy(k).multiplyScalar(X),q.distance=W,q.coneCos=Math.cos(I.angle),q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),q.decay=I.decay,i.spot[v]=q;let j=I.shadow;if(I.map&&(i.spotLightMap[y]=I.map,y++,j.updateMatrices(I),I.castShadow&&E++),i.spotLightMatrix[v]=j.matrix,I.castShadow){let Q=e.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=it,R++}v++}else if(I.isRectAreaLight){let q=t.get(I);q.color.copy(k).multiplyScalar(X),q.halfWidth.set(I.width*.5,0,0),q.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=q,T++}else if(I.isPointLight){let q=t.get(I);if(q.color.copy(I.color).multiplyScalar(I.intensity),q.distance=I.distance,q.decay=I.decay,I.castShadow){let j=I.shadow,Q=e.get(I);Q.shadowIntensity=j.intensity,Q.shadowBias=j.bias,Q.shadowNormalBias=j.normalBias,Q.shadowRadius=j.radius,Q.shadowMapSize=j.mapSize,Q.shadowCameraNear=j.camera.near,Q.shadowCameraFar=j.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=it,i.pointShadowMatrix[p]=I.shadow.matrix,S++}i.point[p]=q,p++}else if(I.isHemisphereLight){let q=t.get(I);q.skyColor.copy(I.color).multiplyScalar(X),q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[M]=q,M++}}T>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==v||F.rectAreaLength!==T||F.hemiLength!==M||F.numSunShadows!==g||F.numDirectionalShadows!==w||F.numPointShadows!==S||F.numSpotShadows!==R||F.numSpotMaps!==y||F.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=T,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+y-E,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=v,F.rectAreaLength=T,F.hemiLength=M,F.numSunShadows=g,F.numDirectionalShadows=w,F.numPointShadows=S,F.numSpotShadows=R,F.numSpotMaps=y,F.numLightProbes=P,i.version=n_++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,T=c.length;v<T;v++){let M=c[v];if(M.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(n),w.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let w=i.rectArea[x];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),x++}else if(M.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:i}}function Hd(s){let t=new r_(s),e=[],i=[],n=[];function r(u){d.camera=u,e.length=0,i.length=0,n.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){n.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function o_(s){let t=new WeakMap;function e(n,r=0){let o=t.get(n),a;return o===void 0?(a=new Hd(s),t.set(n,[a])):r>=o.length?(a=new Hd(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,c_=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],h_=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],Vd=new de,vo=new C,vh=new C;function u_(s,t,e){let i=new Qs,n=new _t,r=new _t,o=new Ce,a=new Da,l=new Na,c={},h=e.maxTextureSize,d={[$n]:ti,[ti]:$n,[Ke]:Ke},u=new De({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:a_,fragmentShader:l_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new _e;g.setAttribute("position",new Le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ot(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=io;let p=this.type;this.render=function(S,R,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Ya&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=io);let E=s.getRenderTarget(),P=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),L=s.state;L.setBlending(Ni),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let B=p!==this.type;B&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=S.length;I<k;I++){let X=S[I],W=X.shadow;if(W===void 0){zt("WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let it=W.getFrameExtents();n.multiply(it),r.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/it.x),n.x=r.x*it.x,W.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/it.y),n.y=r.y*it.y,W.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||B===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===sr){if(X.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ue(n.x,n.y,{format:Qn,type:ei,minFilter:Ve,magFilter:Ve,generateMipmaps:!1}),W.map.texture.name=X.name+".shadowMap",W.map.depthTexture=new Gn(n.x,n.y,Ui),W.map.depthTexture.name=X.name+".shadowMapDepth",W.map.depthTexture.format=sn,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je}else X.isPointLight?(W.map=new Bl(n.x),W.map.depthTexture=new Ia(n.x,qi)):(W.map=new Ue(n.x,n.y),W.map.depthTexture=new Gn(n.x,n.y,qi)),W.map.depthTexture.name=X.name+".shadowMap",W.map.depthTexture.format=sn,this.type===io?(W.map.depthTexture.compareFunction=q?Fl:Ul,W.map.depthTexture.minFilter=Ve,W.map.depthTexture.magFilter=Ve):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Je,W.map.depthTexture.magFilter=Je);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let j=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();X.isPointLight!==!0&&W.updateMatrices(X,y);for(let Q=0;Q<j;Q++){let Ct=W.getCamera(Q);if(X.isPointLight){let Dt=W.camera,Me=W.matrix,ne=X.distance||Dt.far;ne!==Dt.far&&(Dt.far=ne,Dt.updateProjectionMatrix()),vo.setFromMatrixPosition(X.matrixWorld),Dt.position.copy(vo),vh.copy(Dt.position),vh.add(c_[Q]),Dt.up.copy(h_[Q]),Dt.lookAt(vh),Dt.updateMatrixWorld(),Me.makeTranslation(-vo.x,-vo.y,-vo.z),Vd.multiplyMatrices(Dt.projectionMatrix,Dt.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Vd,Dt.coordinateSystem,Dt.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(W.map),s.clear());let Dt=W.getViewport(Q);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),L.viewport(o)}i=W.getFrustum(Q),M(R,y,Ct,X,this.type)}W.isPointLightShadow!==!0&&this.type===sr&&v(W,y),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(E,P,F)};function v(S,R){let y=t.update(x);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Ue(n.x,n.y,{format:Qn,type:ei}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,s.setRenderTarget(S.mapPass),s.clear(),s.renderBufferDirect(R,null,y,u,x,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,s.setRenderTarget(S.map),s.clear(),s.renderBufferDirect(R,null,y,f,x,null)}function T(S,R,y,E){let P=null,F=y.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(F!==void 0)P=F;else if(P=y.isPointLight===!0?l:a,s.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=P.uuid,B=R.uuid,I=c[L];I===void 0&&(I={},c[L]=I);let k=I[B];k===void 0&&(k=P.clone(),I[B]=k,R.addEventListener("dispose",w)),P=k}if(P.visible=R.visible,P.wireframe=R.wireframe,E===sr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:d[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,y.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=s.properties.get(P);L.light=y}return P}function M(S,R,y,E,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===sr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,S.matrixWorld);let B=t.update(S),I=S.material;if(Array.isArray(I)){let k=B.groups;for(let X=0,W=k.length;X<W;X++){let it=k[X],q=I[it.materialIndex];if(q&&q.visible){let j=T(S,q,E,P);S.onBeforeShadow(s,S,R,y,B,j,it),s.renderBufferDirect(y,null,B,j,S,it),S.onAfterShadow(s,S,R,y,B,j,it)}}}else if(I.visible){let k=T(S,I,E,P);S.onBeforeShadow(s,S,R,y,B,k,null),s.renderBufferDirect(y,null,B,k,S,null),S.onAfterShadow(s,S,R,y,B,k,null)}}let L=S.children;for(let B=0,I=L.length;B<I;B++)M(L[B],R,y,E,P)}function w(S){S.target.removeEventListener("dispose",w);for(let y in c){let E=c[y],P=S.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function d_(s,t){function e(){let N=!1,ht=new Ce,J=null,ut=new Ce(0,0,0,0);return{setMask:function(gt){J!==gt&&!N&&(s.colorMask(gt,gt,gt,gt),J=gt)},setLocked:function(gt){N=gt},setClear:function(gt,et,Nt,Et,Se){Se===!0&&(gt*=Et,et*=Et,Nt*=Et),ht.set(gt,et,Nt,Et),ut.equals(ht)===!1&&(s.clearColor(gt,et,Nt,Et),ut.copy(ht))},reset:function(){N=!1,J=null,ut.set(-1,0,0,0)}}}function i(){let N=!1,ht=!1,J=null,ut=null,gt=null;return{setReversed:function(et){if(ht!==et){let Nt=t.get("EXT_clip_control");et?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),ht=et;let Et=gt;gt=null,this.setClear(Et)}},getReversed:function(){return ht},setTest:function(et){et?tt(s.DEPTH_TEST):bt(s.DEPTH_TEST)},setMask:function(et){J!==et&&!N&&(s.depthMask(et),J=et)},setFunc:function(et){if(ht&&(et=xd[et]),ut!==et){switch(et){case fa:s.depthFunc(s.NEVER);break;case pa:s.depthFunc(s.ALWAYS);break;case ma:s.depthFunc(s.LESS);break;case Ws:s.depthFunc(s.LEQUAL);break;case ga:s.depthFunc(s.EQUAL);break;case xa:s.depthFunc(s.GEQUAL);break;case _a:s.depthFunc(s.GREATER);break;case ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ut=et}},setLocked:function(et){N=et},setClear:function(et){gt!==et&&(gt=et,ht&&(et=1-et),s.clearDepth(et))},reset:function(){N=!1,J=null,ut=null,gt=null,ht=!1}}}function n(){let N=!1,ht=null,J=null,ut=null,gt=null,et=null,Nt=null,Et=null,Se=null;return{setTest:function(he){N||(he?tt(s.STENCIL_TEST):bt(s.STENCIL_TEST))},setMask:function(he){ht!==he&&!N&&(s.stencilMask(he),ht=he)},setFunc:function(he,Oi,ji){(J!==he||ut!==Oi||gt!==ji)&&(s.stencilFunc(he,Oi,ji),J=he,ut=Oi,gt=ji)},setOp:function(he,Oi,ji){(et!==he||Nt!==Oi||Et!==ji)&&(s.stencilOp(he,Oi,ji),et=he,Nt=Oi,Et=ji)},setLocked:function(he){N=he},setClear:function(he){Se!==he&&(s.clearStencil(he),Se=he)},reset:function(){N=!1,ht=null,J=null,ut=null,gt=null,et=null,Nt=null,Et=null,Se=null}}}let r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,M=null,w=null,S=null,R=null,y=new rt(0,0,0),E=0,P=!1,F=null,L=null,B=null,I=null,k=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,it=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=it>=1):q.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=it>=2);let j=null,Q={},Ct=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Me=new Ce().fromArray(Ct),ne=new Ce().fromArray(Dt);function le(N,ht,J,ut){let gt=new Uint8Array(4),et=s.createTexture();s.bindTexture(N,et),s.texParameteri(N,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(N,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<J;Nt++)N===s.TEXTURE_3D||N===s.TEXTURE_2D_ARRAY?s.texImage3D(ht,0,s.RGBA,1,1,ut,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ht+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return et}let $={};$[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(s.DEPTH_TEST),o.setFunc(Ws),Jt(!1),Ae(Kc),tt(s.CULL_FACE),re(Ni);function tt(N){h[N]!==!0&&(s.enable(N),h[N]=!0)}function bt(N){h[N]!==!1&&(s.disable(N),h[N]=!1)}function Ot(N,ht){return u[N]!==ht?(s.bindFramebuffer(N,ht),u[N]=ht,N===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ht),N===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ht),!0):!1}function vt(N,ht){let J=g,ut=!1;if(N){J=f.get(ht),J===void 0&&(J=[],f.set(ht,J));let gt=N.textures;if(J.length!==gt.length||J[0]!==s.COLOR_ATTACHMENT0){for(let et=0,Nt=gt.length;et<Nt;et++)J[et]=s.COLOR_ATTACHMENT0+et;J.length=gt.length,ut=!0}}else J[0]!==s.BACK&&(J[0]=s.BACK,ut=!0);ut&&s.drawBuffers(J)}function Xt(N){return x!==N?(s.useProgram(N),x=N,!0):!1}let Xe={[ds]:s.FUNC_ADD,[Bu]:s.FUNC_SUBTRACT,[Ou]:s.FUNC_REVERSE_SUBTRACT};Xe[Hu]=s.MIN,Xe[Vu]=s.MAX;let $t={[Gu]:s.ZERO,[Wu]:s.ONE,[Xu]:s.SRC_COLOR,[th]:s.SRC_ALPHA,[Ku]:s.SRC_ALPHA_SATURATE,[Zu]:s.DST_COLOR,[Yu]:s.DST_ALPHA,[qu]:s.ONE_MINUS_SRC_COLOR,[eh]:s.ONE_MINUS_SRC_ALPHA,[Ju]:s.ONE_MINUS_DST_COLOR,[$u]:s.ONE_MINUS_DST_ALPHA,[ju]:s.CONSTANT_COLOR,[Qu]:s.ONE_MINUS_CONSTANT_COLOR,[td]:s.CONSTANT_ALPHA,[ed]:s.ONE_MINUS_CONSTANT_ALPHA};function re(N,ht,J,ut,gt,et,Nt,Et,Se,he){if(N===Ni){m===!0&&(bt(s.BLEND),m=!1);return}if(m===!1&&(tt(s.BLEND),m=!0),N!==ku){if(N!==p||he!==P){if((v!==ds||w!==ds)&&(s.blendEquation(s.FUNC_ADD),v=ds,w=ds),he)switch(N){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFunc(s.ONE,s.ONE);break;case jc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Qc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:kt("WebGLState: Invalid blending: ",N);break}else switch(N){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ge:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case jc:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qc:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",N);break}T=null,M=null,S=null,R=null,y.set(0,0,0),E=0,p=N,P=he}return}gt=gt||ht,et=et||J,Nt=Nt||ut,(ht!==v||gt!==w)&&(s.blendEquationSeparate(Xe[ht],Xe[gt]),v=ht,w=gt),(J!==T||ut!==M||et!==S||Nt!==R)&&(s.blendFuncSeparate($t[J],$t[ut],$t[et],$t[Nt]),T=J,M=ut,S=et,R=Nt),(Et.equals(y)===!1||Se!==E)&&(s.blendColor(Et.r,Et.g,Et.b,Se),y.copy(Et),E=Se),p=N,P=!1}function be(N,ht){N.side===Ke?bt(s.CULL_FACE):tt(s.CULL_FACE);let J=N.side===ti;ht&&(J=!J),Jt(J),N.blending===Zn&&N.transparent===!1?re(Ni):re(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let ut=N.stencilWrite;a.setTest(ut),ut&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),xi(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?tt(s.SAMPLE_ALPHA_TO_COVERAGE):bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(N){F!==N&&(N?s.frontFace(s.CW):s.frontFace(s.CCW),F=N)}function Ae(N){N!==Fu?(tt(s.CULL_FACE),N!==L&&(N===Kc?s.cullFace(s.BACK):N===zu?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):bt(s.CULL_FACE),L=N}function $e(N){N!==B&&(W&&s.lineWidth(N),B=N)}function xi(N,ht,J){N?(tt(s.POLYGON_OFFSET_FILL),(I!==ht||k!==J)&&(I=ht,k=J,o.getReversed()&&(ht=-ht),s.polygonOffset(ht,J))):bt(s.POLYGON_OFFSET_FILL)}function Ie(N){N?tt(s.SCISSOR_TEST):bt(s.SCISSOR_TEST)}function Be(N){N===void 0&&(N=s.TEXTURE0+X-1),j!==N&&(s.activeTexture(N),j=N)}function U(N,ht,J){J===void 0&&(j===null?J=s.TEXTURE0+X-1:J=j);let ut=Q[J];ut===void 0&&(ut={type:void 0,texture:void 0},Q[J]=ut),(ut.type!==N||ut.texture!==ht)&&(j!==J&&(s.activeTexture(J),j=J),s.bindTexture(N,ht||$[N]),ut.type=N,ut.texture=ht)}function ni(){let N=Q[j];N!==void 0&&N.type!==void 0&&(s.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function me(){try{s.compressedTexImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function A(){try{s.compressedTexImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function _(){try{s.texSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function z(){try{s.texSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function V(){try{s.compressedTexSubImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function Y(){try{s.compressedTexSubImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function st(){try{s.texStorage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function at(){try{s.texStorage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function Z(){try{s.texImage2D(...arguments)}catch(N){kt("WebGLState:",N)}}function K(){try{s.texImage3D(...arguments)}catch(N){kt("WebGLState:",N)}}function lt(N){return d[N]!==void 0?d[N]:s.getParameter(N)}function Pt(N,ht){d[N]!==ht&&(s.pixelStorei(N,ht),d[N]=ht)}function dt(N){Me.equals(N)===!1&&(s.scissor(N.x,N.y,N.z,N.w),Me.copy(N))}function ct(N){ne.equals(N)===!1&&(s.viewport(N.x,N.y,N.z,N.w),ne.copy(N))}function It(N,ht){let J=c.get(ht);J===void 0&&(J=new WeakMap,c.set(ht,J));let ut=J.get(N);ut===void 0&&(ut=s.getUniformBlockIndex(ht,N.name),J.set(N,ut))}function Ft(N,ht){let ut=c.get(ht).get(N);l.get(ht)!==ut&&(s.uniformBlockBinding(ht,ut,N.__bindingPointIndex),l.set(ht,ut))}function Ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},j=null,Q={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,T=null,M=null,w=null,S=null,R=null,y=new rt(0,0,0),E=0,P=!1,F=null,L=null,B=null,I=null,k=null,Me.set(0,0,s.canvas.width,s.canvas.height),ne.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:bt,bindFramebuffer:Ot,drawBuffers:vt,useProgram:Xt,setBlending:re,setMaterial:be,setFlipSided:Jt,setCullFace:Ae,setLineWidth:$e,setPolygonOffset:xi,setScissorTest:Ie,activeTexture:Be,bindTexture:U,unbindTexture:ni,compressedTexImage2D:me,compressedTexImage3D:A,texImage2D:Z,texImage3D:K,pixelStorei:Pt,getParameter:lt,updateUBOMapping:It,uniformBlockBinding:Ft,texStorage2D:st,texStorage3D:at,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:V,compressedTexSubImage3D:Y,scissor:dt,viewport:ct,reset:Ht}}function f_(s,t,e,i,n,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _t,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return g?new OffscreenCanvas(A,_):Nr("canvas")}function m(A,_,z){let V=1,Y=me(A);if((Y.width>z||Y.height>z)&&(V=z/Math.max(Y.width,Y.height)),V<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let st=Math.floor(V*Y.width),at=Math.floor(V*Y.height);u===void 0&&(u=x(st,at));let Z=_?x(st,at):u;return Z.width=st,Z.height=at,Z.getContext("2d").drawImage(A,0,0,st,at),zt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+st+"x"+at+")."),Z}else return"data"in A&&zt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),A;return A}function p(A){return A.generateMipmaps}function v(A){s.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function M(A,_,z,V,Y,st=!1){if(A!==null){if(s[A]!==void 0)return s[A];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at;V&&(at=t.get("EXT_texture_norm16"),at||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=_;if(_===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8),z===s.UNSIGNED_SHORT&&at&&(Z=at.R16_EXT),z===s.SHORT&&at&&(Z=at.R16_SNORM_EXT)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),_===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8),z===s.UNSIGNED_SHORT&&at&&(Z=at.RG16_EXT),z===s.SHORT&&at&&(Z=at.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),_===s.RGB&&(z===s.UNSIGNED_SHORT&&at&&(Z=at.RGB16_EXT),z===s.SHORT&&at&&(Z=at.RGB16_SNORM_EXT),z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),z===s.UNSIGNED_INT_10F_11F_11F_REV&&(Z=s.R11F_G11F_B10F)),_===s.RGBA){let K=st?Dr:qt.getTransfer(Y);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=K===oe?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT&&at&&(Z=at.RGBA16_EXT),z===s.SHORT&&at&&(Z=at.RGBA16_SNORM_EXT),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function w(A,_){let z;return A?_===null||_===qi||_===or?z=s.DEPTH24_STENCIL8:_===Ui?z=s.DEPTH32F_STENCIL8:_===rr&&(z=s.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===qi||_===or?z=s.DEPTH_COMPONENT24:_===Ui?z=s.DEPTH_COMPONENT32F:_===rr&&(z=s.DEPTH_COMPONENT16),z}function S(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==Ve?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function R(A){let _=A.target;_.removeEventListener("dispose",R),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(A){let _=A.target;_.removeEventListener("dispose",y),F(_)}function E(A){let _=i.get(A);if(_.__webglInit===void 0)return;let z=A.source,V=f.get(z);if(V){let Y=V[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&P(A),Object.keys(V).length===0&&f.delete(z)}i.remove(A)}function P(A){let _=i.get(A);s.deleteTexture(_.__webglTexture);let z=A.source,V=f.get(z);delete V[_.__cacheKey],o.memory.textures--}function F(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(_.__webglFramebuffer[V]))for(let Y=0;Y<_.__webglFramebuffer[V].length;Y++)s.deleteFramebuffer(_.__webglFramebuffer[V][Y]);else s.deleteFramebuffer(_.__webglFramebuffer[V]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[V])}else{if(Array.isArray(_.__webglFramebuffer))for(let V=0;V<_.__webglFramebuffer.length;V++)s.deleteFramebuffer(_.__webglFramebuffer[V]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let V=0;V<_.__webglColorRenderbuffer.length;V++)_.__webglColorRenderbuffer[V]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[V]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=A.textures;for(let V=0,Y=z.length;V<Y;V++){let st=i.get(z[V]);st.__webglTexture&&(s.deleteTexture(st.__webglTexture),o.memory.textures--),i.remove(z[V])}i.remove(A)}let L=0;function B(){L=0}function I(){return L}function k(A){L=A}function X(){let A=L;return A>=n.maxTextures&&zt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+n.maxTextures),L+=1,A}function W(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function it(A,_){let z=i.get(A);if(A.isVideoTexture&&U(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let V=A.image;if(V===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function q(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){bt(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function j(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){bt(z,A,_);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function Q(A,_){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Ot(z,A,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}let Ct={[Vn]:s.REPEAT,[nn]:s.CLAMP_TO_EDGE,[va]:s.MIRRORED_REPEAT},Dt={[Je]:s.NEAREST,[sd]:s.NEAREST_MIPMAP_NEAREST,[ho]:s.NEAREST_MIPMAP_LINEAR,[Ve]:s.LINEAR,[Ka]:s.LINEAR_MIPMAP_NEAREST,[Kn]:s.LINEAR_MIPMAP_LINEAR},Me={[ld]:s.NEVER,[fd]:s.ALWAYS,[cd]:s.LESS,[Ul]:s.LEQUAL,[hd]:s.EQUAL,[Fl]:s.GEQUAL,[ud]:s.GREATER,[dd]:s.NOTEQUAL};function ne(A,_){if(_.type===Ui&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ve||_.magFilter===Ka||_.magFilter===ho||_.magFilter===Kn||_.minFilter===Ve||_.minFilter===Ka||_.minFilter===ho||_.minFilter===Kn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,Ct[_.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,Ct[_.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,Ct[_.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,Dt[_.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,Dt[_.minFilter]),_.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Je||_.minFilter!==ho&&_.minFilter!==Kn||_.type===Ui&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function le(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",R));let V=_.source,Y=f.get(V);Y===void 0&&(Y={},f.set(V,Y));let st=W(_);if(st!==A.__cacheKey){Y[st]===void 0&&(Y[st]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Y[st].usedTimes++;let at=Y[A.__cacheKey];at!==void 0&&(Y[A.__cacheKey].usedTimes--,at.usedTimes===0&&P(_)),A.__cacheKey=st,A.__webglTexture=Y[st].texture}return z}function $(A,_,z){return Math.floor(Math.floor(A/z)/_)}function tt(A,_,z,V){let st=A.updateRanges;if(st.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,z,V,_.data);else{st.sort((Pt,dt)=>Pt.start-dt.start);let at=0;for(let Pt=1;Pt<st.length;Pt++){let dt=st[at],ct=st[Pt],It=dt.start+dt.count,Ft=$(ct.start,_.width,4),Ht=$(dt.start,_.width,4);ct.start<=It+1&&Ft===Ht&&$(ct.start+ct.count-1,_.width,4)===Ft?dt.count=Math.max(dt.count,ct.start+ct.count-dt.start):(++at,st[at]=ct)}st.length=at+1;let Z=e.getParameter(s.UNPACK_ROW_LENGTH),K=e.getParameter(s.UNPACK_SKIP_PIXELS),lt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Pt=0,dt=st.length;Pt<dt;Pt++){let ct=st[Pt],It=Math.floor(ct.start/4),Ft=Math.ceil(ct.count/4),Ht=It%_.width,N=Math.floor(It/_.width),ht=Ft,J=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Ht),e.pixelStorei(s.UNPACK_SKIP_ROWS,N),e.texSubImage2D(s.TEXTURE_2D,0,Ht,N,ht,J,z,V,_.data)}A.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,Z),e.pixelStorei(s.UNPACK_SKIP_PIXELS,K),e.pixelStorei(s.UNPACK_SKIP_ROWS,lt)}}function bt(A,_,z){let V=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(V=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(V=s.TEXTURE_3D);let Y=le(A,_),st=_.source;e.bindTexture(V,A.__webglTexture,s.TEXTURE0+z);let at=i.get(st);if(st.version!==at.__version||Y===!0){if(e.activeTexture(s.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let J=qt.getPrimaries(qt.workingColorSpace),ut=_.colorSpace===En?null:qt.getPrimaries(_.colorSpace),gt=_.colorSpace===En||J===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let K=m(_.image,!1,n.maxTextureSize);K=ni(_,K);let lt=r.convert(_.format,_.colorSpace),Pt=r.convert(_.type),dt=M(_.internalFormat,lt,Pt,_.normalized,_.colorSpace,_.isVideoTexture);ne(V,_);let ct,It=_.mipmaps,Ft=_.isVideoTexture!==!0,Ht=at.__version===void 0||Y===!0,N=st.dataReady,ht=S(_,K);if(_.isDepthTexture)dt=w(_.format===jn,_.type),Ht&&(Ft?e.texStorage2D(s.TEXTURE_2D,1,dt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,dt,K.width,K.height,0,lt,Pt,null));else if(_.isDataTexture)if(It.length>0){Ft&&Ht&&e.texStorage2D(s.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)ct=It[J],Ft?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ct.width,ct.height,lt,Pt,ct.data):e.texImage2D(s.TEXTURE_2D,J,dt,ct.width,ct.height,0,lt,Pt,ct.data);_.generateMipmaps=!1}else Ft?(Ht&&e.texStorage2D(s.TEXTURE_2D,ht,dt,K.width,K.height),N&&tt(_,K,lt,Pt)):e.texImage2D(s.TEXTURE_2D,0,dt,K.width,K.height,0,lt,Pt,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&Ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,It[0].width,It[0].height,K.depth);for(let J=0,ut=It.length;J<ut;J++)if(ct=It[J],_.format!==Fi)if(lt!==null)if(Ft){if(N)if(_.layerUpdates.size>0){let gt=ph(ct.width,ct.height,_.format,_.type);for(let et of _.layerUpdates){let Nt=ct.data.subarray(et*gt/ct.data.BYTES_PER_ELEMENT,(et+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,et,ct.width,ct.height,1,lt,Nt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,K.depth,lt,ct.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,J,dt,ct.width,ct.height,K.depth,0,ct.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?N&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,J,0,0,0,ct.width,ct.height,K.depth,lt,Pt,ct.data):e.texImage3D(s.TEXTURE_2D_ARRAY,J,dt,ct.width,ct.height,K.depth,0,lt,Pt,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&Ht&&e.texStorage2D(s.TEXTURE_2D,ht,dt,It[0].width,It[0].height);for(let J=0,ut=It.length;J<ut;J++)ct=It[J],_.format!==Fi?lt!==null?Ft?N&&e.compressedTexSubImage2D(s.TEXTURE_2D,J,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(s.TEXTURE_2D,J,dt,ct.width,ct.height,0,ct.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,ct.width,ct.height,lt,Pt,ct.data):e.texImage2D(s.TEXTURE_2D,J,dt,ct.width,ct.height,0,lt,Pt,ct.data)}else if(_.isDataArrayTexture)if(Ft){if(Ht&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ht,dt,K.width,K.height,K.depth),N)if(_.layerUpdates.size>0){let J=ph(K.width,K.height,_.format,_.type);for(let ut of _.layerUpdates){let gt=K.data.subarray(ut*J/K.data.BYTES_PER_ELEMENT,(ut+1)*J/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,K.width,K.height,1,lt,Pt,gt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,lt,Pt,K.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,dt,K.width,K.height,K.depth,0,lt,Pt,K.data);else if(_.isData3DTexture)Ft?(Ht&&e.texStorage3D(s.TEXTURE_3D,ht,dt,K.width,K.height,K.depth),N&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,lt,Pt,K.data)):e.texImage3D(s.TEXTURE_3D,0,dt,K.width,K.height,K.depth,0,lt,Pt,K.data);else if(_.isFramebufferTexture){if(Ht)if(Ft)e.texStorage2D(s.TEXTURE_2D,ht,dt,K.width,K.height);else{let J=K.width,ut=K.height;for(let gt=0;gt<ht;gt++)e.texImage2D(s.TEXTURE_2D,gt,dt,J,ut,0,lt,Pt,null),J>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let J=s.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),K.parentNode!==J){J.appendChild(K),d.add(_),J.onpaint=ut=>{let gt=ut.changedElements;for(let et of d)gt.includes(et.image)&&(et.needsUpdate=!0)},J.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,K);else{let gt=s.RGBA,et=s.RGBA,Nt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,gt,et,Nt,K)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(It.length>0){if(Ft&&Ht){let J=me(It[0]);e.texStorage2D(s.TEXTURE_2D,ht,dt,J.width,J.height)}for(let J=0,ut=It.length;J<ut;J++)ct=It[J],Ft?N&&e.texSubImage2D(s.TEXTURE_2D,J,0,0,lt,Pt,ct):e.texImage2D(s.TEXTURE_2D,J,dt,lt,Pt,ct);_.generateMipmaps=!1}else if(Ft){if(Ht){let J=me(K);e.texStorage2D(s.TEXTURE_2D,ht,dt,J.width,J.height)}N&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt,Pt,K)}else e.texImage2D(s.TEXTURE_2D,0,dt,lt,Pt,K);p(_)&&v(V),at.__version=st.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Ot(A,_,z){if(_.image.length!==6)return;let V=le(A,_),Y=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+z);let st=i.get(Y);if(Y.version!==st.__version||V===!0){e.activeTexture(s.TEXTURE0+z);let at=qt.getPrimaries(qt.workingColorSpace),Z=_.colorSpace===En?null:qt.getPrimaries(_.colorSpace),K=_.colorSpace===En||at===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Pt=_.image[0]&&_.image[0].isDataTexture,dt=[];for(let et=0;et<6;et++)!lt&&!Pt?dt[et]=m(_.image[et],!0,n.maxCubemapSize):dt[et]=Pt?_.image[et].image:_.image[et],dt[et]=ni(_,dt[et]);let ct=dt[0],It=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Ht=M(_.internalFormat,It,Ft,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ht=st.__version===void 0||V===!0,J=Y.dataReady,ut=S(_,ct);ne(s.TEXTURE_CUBE_MAP,_);let gt;if(lt){N&&ht&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ht,ct.width,ct.height);for(let et=0;et<6;et++){gt=dt[et].mipmaps;for(let Nt=0;Nt<gt.length;Nt++){let Et=gt[Nt];_.format!==Fi?It!==null?N?J&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,0,0,Et.width,Et.height,It,Et.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,Ht,Et.width,Et.height,0,Et.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,0,0,Et.width,Et.height,It,Ft,Et.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt,Ht,Et.width,Et.height,0,It,Ft,Et.data)}}}else{if(gt=_.mipmaps,N&&ht){gt.length>0&&ut++;let et=me(dt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Ht,et.width,et.height)}for(let et=0;et<6;et++)if(Pt){N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,dt[et].width,dt[et].height,It,Ft,dt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,dt[et].width,dt[et].height,0,It,Ft,dt[et].data);for(let Nt=0;Nt<gt.length;Nt++){let Se=gt[Nt].image[et].image;N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,0,0,Se.width,Se.height,It,Ft,Se.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,Ht,Se.width,Se.height,0,It,Ft,Se.data)}}else{N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,It,Ft,dt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Ht,It,Ft,dt[et]);for(let Nt=0;Nt<gt.length;Nt++){let Et=gt[Nt];N?J&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,0,0,It,Ft,Et.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,Nt+1,Ht,It,Ft,Et.image[et])}}}p(_)&&v(s.TEXTURE_CUBE_MAP),st.__version=Y.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function vt(A,_,z,V,Y,st){let at=r.convert(z.format,z.colorSpace),Z=r.convert(z.type),K=M(z.internalFormat,at,Z,z.normalized,z.colorSpace),lt=i.get(_),Pt=i.get(z);if(Pt.__renderTarget=_,!lt.__hasExternalTextures){let dt=Math.max(1,_.width>>st),ct=Math.max(1,_.height>>st);Y===s.TEXTURE_3D||Y===s.TEXTURE_2D_ARRAY?e.texImage3D(Y,st,K,dt,ct,_.depth,0,at,Z,null):e.texImage2D(Y,st,K,dt,ct,0,at,Z,null)}e.bindFramebuffer(s.FRAMEBUFFER,A),Be(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,V,Y,Pt.__webglTexture,0,Ie(_)):(Y===s.TEXTURE_2D||Y>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,V,Y,Pt.__webglTexture,st),e.bindFramebuffer(s.FRAMEBUFFER,null)}function Xt(A,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,A),_.depthBuffer){let V=_.depthTexture,Y=V&&V.isDepthTexture?V.type:null,st=w(_.stencilBuffer,Y),at=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Be(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie(_),st,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie(_),st,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,st,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,A)}else{let V=_.textures;for(let Y=0;Y<V.length;Y++){let st=V[Y],at=r.convert(st.format,st.colorSpace),Z=r.convert(st.type),K=M(st.internalFormat,at,Z,st.normalized,st.colorSpace);Be(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie(_),K,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie(_),K,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,K,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Xe(A,_,z){let V=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),V){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Y.__webglTexture===void 0){Y.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture),ne(s.TEXTURE_CUBE_MAP,_.depthTexture);let lt=r.convert(_.depthTexture.format),Pt=r.convert(_.depthTexture.type),dt;_.depthTexture.format===sn?dt=s.DEPTH_COMPONENT24:_.depthTexture.format===jn&&(dt=s.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,dt,_.width,_.height,0,lt,Pt,null)}}else it(_.depthTexture,0);let st=Y.__webglTexture,at=Ie(_),Z=V?s.TEXTURE_CUBE_MAP_POSITIVE_X+z:s.TEXTURE_2D,K=_.depthTexture.format===jn?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===sn)Be(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,st,0);else if(_.depthTexture.format===jn)Be(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,Z,st,0,at):s.framebufferTexture2D(s.FRAMEBUFFER,K,Z,st,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(A){let _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let V=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),V){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,V.removeEventListener("dispose",Y)};V.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=V}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let V=0;V<6;V++)Xe(_.__webglFramebuffer[V],A,V);else{let V=A.texture.mipmaps;V&&V.length>0?Xe(_.__webglFramebuffer[0],A,0):Xe(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[V]),_.__webglDepthbuffer[V]===void 0)_.__webglDepthbuffer[V]=s.createRenderbuffer(),Xt(_.__webglDepthbuffer[V],A,!1);else{let Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer[V];s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,st)}}else{let V=A.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),Xt(_.__webglDepthbuffer,A,!1);else{let Y=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,st=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,st),s.framebufferRenderbuffer(s.FRAMEBUFFER,Y,s.RENDERBUFFER,st)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function re(A,_,z){let V=i.get(A);_!==void 0&&vt(V.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&$t(A)}function be(A){let _=A.texture,z=i.get(A),V=i.get(_);A.addEventListener("dispose",y);let Y=A.textures,st=A.isWebGLCubeRenderTarget===!0,at=Y.length>1;if(at||(V.__webglTexture===void 0&&(V.__webglTexture=s.createTexture()),V.__version=_.version,o.memory.textures++),st){z.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[Z]=[];for(let K=0;K<_.mipmaps.length;K++)z.__webglFramebuffer[Z][K]=s.createFramebuffer()}else z.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)z.__webglFramebuffer[Z]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(at)for(let Z=0,K=Y.length;Z<K;Z++){let lt=i.get(Y[Z]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Be(A)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Z=0;Z<Y.length;Z++){let K=Y[Z];z.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[Z]);let lt=r.convert(K.format,K.colorSpace),Pt=r.convert(K.type),dt=M(K.internalFormat,lt,Pt,K.normalized,K.colorSpace,A.isXRRenderTarget===!0),ct=Ie(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,dt,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,z.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),Xt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(st){e.bindTexture(s.TEXTURE_CUBE_MAP,V.__webglTexture),ne(s.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)vt(z.__webglFramebuffer[Z][K],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,K);else vt(z.__webglFramebuffer[Z],A,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(_)&&v(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(at){for(let Z=0,K=Y.length;Z<K;Z++){let lt=Y[Z],Pt=i.get(lt),dt=s.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,Pt.__webglTexture),ne(dt,lt),vt(z.__webglFramebuffer,A,lt,s.COLOR_ATTACHMENT0+Z,dt,0),p(lt)&&v(dt)}e.unbindTexture()}else{let Z=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Z=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Z,V.__webglTexture),ne(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let K=0;K<_.mipmaps.length;K++)vt(z.__webglFramebuffer[K],A,_,s.COLOR_ATTACHMENT0,Z,K);else vt(z.__webglFramebuffer,A,_,s.COLOR_ATTACHMENT0,Z,0);p(_)&&v(Z),e.unbindTexture()}A.depthBuffer&&$t(A)}function Jt(A){let _=A.textures;for(let z=0,V=_.length;z<V;z++){let Y=_[z];if(p(Y)){let st=T(A),at=i.get(Y).__webglTexture;e.bindTexture(st,at),v(st),e.unbindTexture()}}}let Ae=[],$e=[];function xi(A){if(A.samples>0){if(Be(A)===!1){let _=A.textures,z=A.width,V=A.height,Y=s.COLOR_BUFFER_BIT,st=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=i.get(A),Z=_.length>1;if(Z)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer);let K=A.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Y|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Y|=s.STENCIL_BUFFER_BIT)),Z){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Pt=i.get(_[lt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Pt,0)}s.blitFramebuffer(0,0,z,V,0,0,z,V,Y,s.NEAREST),l===!0&&(Ae.length=0,$e.length=0,Ae.push(s.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Ae.push(st),$e.push(st),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Z)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.RENDERBUFFER,at.__webglColorRenderbuffer[lt]);let Pt=i.get(_[lt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+lt,s.TEXTURE_2D,Pt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Ie(A){return Math.min(n.maxSamples,A.samples)}function Be(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function U(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function ni(A,_){let z=A.colorSpace,V=A.format,Y=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Lr&&z!==En&&(qt.getTransfer(z)===oe?(V!==Fi||Y!==yi)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",z)),_}function me(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=it,this.setTexture2DArray=q,this.setTexture3D=j,this.setTextureCube=Q,this.rebindTextures=re,this.setupRenderTarget=be,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=xi,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Be,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function p_(s,t){function e(i,n=En){let r,o=qt.getTransfer(n);if(i===yi)return s.UNSIGNED_BYTE;if(i===Qa)return s.UNSIGNED_SHORT_4_4_4_4;if(i===tl)return s.UNSIGNED_SHORT_5_5_5_1;if(i===rh)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===oh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===nh)return s.BYTE;if(i===sh)return s.SHORT;if(i===rr)return s.UNSIGNED_SHORT;if(i===ja)return s.INT;if(i===qi)return s.UNSIGNED_INT;if(i===Ui)return s.FLOAT;if(i===ei)return s.HALF_FLOAT;if(i===ah)return s.ALPHA;if(i===lh)return s.RGB;if(i===Fi)return s.RGBA;if(i===sn)return s.DEPTH_COMPONENT;if(i===jn)return s.DEPTH_STENCIL;if(i===el)return s.RED;if(i===il)return s.RED_INTEGER;if(i===Qn)return s.RG;if(i===nl)return s.RG_INTEGER;if(i===sl)return s.RGBA_INTEGER;if(i===uo||i===fo||i===po||i===mo)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===mo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===rl||i===ol||i===al||i===ll)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===rl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===ll)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===cl||i===hl||i===ul||i===dl||i===fl||i===go||i===pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===cl||i===hl)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===ul)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===dl)return r.COMPRESSED_R11_EAC;if(i===fl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===go)return r.COMPRESSED_RG11_EAC;if(i===pl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ml||i===gl||i===xl||i===_l||i===yl||i===vl||i===Ml||i===bl||i===Sl||i===wl||i===Tl||i===El||i===Al||i===Rl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ml)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_l)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ml)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===El)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Al)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rl)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Cl||i===Pl||i===Il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Cl)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ll||i===Dl||i===xo||i===Nl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ll)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}var m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Yr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new De({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ot(new Di(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends rn{constructor(t,e){super();let i=this,n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new Rh,p={},v=e.getContextAttributes(),T=null,M=null,w=[],S=[],R=new _t,y=null,E=null,P=new Ne;P.viewport=new Ce;let F=new Ne;F.viewport=new Ce;let L=[P,F],B=new qa,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let tt=w[$];return tt===void 0&&(tt=new Zs,w[$]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function($){let tt=w[$];return tt===void 0&&(tt=new Zs,w[$]=tt),tt.getGripSpace()},this.getHand=function($){let tt=w[$];return tt===void 0&&(tt=new Zs,w[$]=tt),tt.getHandSpace()};function X($){let tt=S.indexOf($.inputSource);if(tt===-1)return;let bt=w[tt];bt!==void 0&&(bt.update($.inputSource,$.frame,c||o),bt.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){n.removeEventListener("select",X),n.removeEventListener("selectstart",X),n.removeEventListener("selectend",X),n.removeEventListener("squeeze",X),n.removeEventListener("squeezestart",X),n.removeEventListener("squeezeend",X),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",it);for(let $=0;$<w.length;$++){let tt=S[$];tt!==null&&(S[$]=null,w[$].disconnect(tt))}I=null,k=null,m.reset();for(let $ in p)delete p[$];if(t.setRenderTarget(T),f=null,u=null,d=null,n=null,M=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(R.width,R.height,!1),E!==null){let $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,e)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function($){if(n=$,n!==null){if(T=t.getRenderTarget(),n.addEventListener("select",X),n.addEventListener("selectstart",X),n.addEventListener("selectend",X),n.addEventListener("squeeze",X),n.addEventListener("squeezestart",X),n.addEventListener("squeezeend",X),n.addEventListener("end",W),n.addEventListener("inputsourceschange",it),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Ot=null,vt=null;v.depth&&(vt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=v.stencil?jn:sn,Ot=v.stencil?or:qi);let Xt={colorFormat:e.RGBA8,depthFormat:vt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Xt),n.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Ue(u.textureWidth,u.textureHeight,{format:Fi,type:yi,depthTexture:new Gn(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,e,bt),n.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Ue(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:yi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),le.setContext(n),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function it($){for(let tt=0;tt<$.removed.length;tt++){let bt=$.removed[tt],Ot=S.indexOf(bt);Ot>=0&&(S[Ot]=null,w[Ot].disconnect(bt))}for(let tt=0;tt<$.added.length;tt++){let bt=$.added[tt],Ot=S.indexOf(bt);if(Ot===-1){for(let Xt=0;Xt<w.length;Xt++)if(Xt>=S.length){S.push(bt),Ot=Xt;break}else if(S[Xt]===null){S[Xt]=bt,Ot=Xt;break}if(Ot===-1)break}let vt=w[Ot];vt&&vt.connect(bt)}}let q=new C,j=new C;function Q($,tt,bt){q.setFromMatrixPosition(tt.matrixWorld),j.setFromMatrixPosition(bt.matrixWorld);let Ot=q.distanceTo(j),vt=tt.projectionMatrix.elements,Xt=bt.projectionMatrix.elements,Xe=vt[14]/(vt[10]-1),$t=vt[14]/(vt[10]+1),re=(vt[9]+1)/vt[5],be=(vt[9]-1)/vt[5],Jt=(vt[8]-1)/vt[0],Ae=(Xt[8]+1)/Xt[0],$e=Xe*Jt,xi=Xe*Ae,Ie=Ot/(-Jt+Ae),Be=Ie*-Jt;if(tt.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Be),$.translateZ(Ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),vt[10]===-1)$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let U=Xe+Ie,ni=$t+Ie,me=$e-Be,A=xi+(Ot-Be),_=re*$t/ni*U,z=be*$t/ni*U;$.projectionMatrix.makePerspective(me,A,_,z,U,ni),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ct($,tt){tt===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(tt.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(n===null)return;let tt=$.near,bt=$.far;m.texture!==null&&(m.depthNear>0&&(tt=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),B.near=F.near=P.near=tt,B.far=F.far=P.far=bt,(I!==B.near||k!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),I=B.near,k=B.far),B.layers.mask=$.layers.mask|6,P.layers.mask=B.layers.mask&-5,F.layers.mask=B.layers.mask&-3;let Ot=$.parent,vt=B.cameras;Ct(B,Ot);for(let Xt=0;Xt<vt.length;Xt++)Ct(vt[Xt],Ot);vt.length===2?Q(B,P,F):B.projectionMatrix.copy(P.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),Dt($,B,Ot)};function Dt($,tt,bt){bt===null?$.matrix.copy(tt.matrixWorld):($.matrix.copy(bt.matrixWorld),$.matrix.invert(),$.matrix.multiply(tt.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(tt.projectionMatrix),$.projectionMatrixInverse.copy(tt.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=ba*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function($){return p[$]};let Me=null;function ne($,tt){if(h=tt.getViewerPose(c||o),g=tt,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let Ot=!1;bt.length!==B.cameras.length&&(B.cameras.length=0,Ot=!0);for(let $t=0;$t<bt.length;$t++){let re=bt[$t],be=null;if(f!==null)be=f.getViewport(re);else{let Ae=d.getViewSubImage(u,re);be=Ae.viewport,$t===0&&(t.setRenderTargetTextures(M,Ae.colorTexture,Ae.depthStencilTexture),t.setRenderTarget(M))}let Jt=L[$t];Jt===void 0&&(Jt=new Ne,Jt.layers.enable($t),Jt.viewport=new Ce,L[$t]=Jt),Jt.matrix.fromArray(re.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(re.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(be.x,be.y,be.width,be.height),$t===0&&(B.matrix.copy(Jt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ot===!0&&B.cameras.push(Jt)}let vt=n.enabledFeatures;if(vt&&vt.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=i.getBinding();let $t=d.getDepthInformation(bt[0]);$t&&$t.isValid&&$t.texture&&m.init($t,n.renderState)}if(vt&&vt.includes("camera-access")&&x){t.state.unbindTexture(),d=i.getBinding();for(let $t=0;$t<bt.length;$t++){let re=bt[$t].camera;if(re){let be=p[re];be||(be=new Yr,p[re]=be);let Jt=d.getCameraImage(re);be.sourceTexture=Jt}}}}for(let bt=0;bt<w.length;bt++){let Ot=S[bt],vt=w[bt];Ot!==null&&vt!==void 0&&vt.update(Ot,tt,c||o)}Me&&Me($,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),g=null}let le=new Gd;le.setAnimationLoop(ne),this.setAnimationLoop=function($){Me=$},this.dispose=function(){}}},x_=new de,Zd=new Bt;Zd.set(-1,0,0,0,1,0,0,0,1);function __(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,uh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,T,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===ti&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===ti&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),T=v.envMap,M=v.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Zd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=T*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ti&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function y_(s,t,e,i){let n={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let S=w.program;i.uniformBlockBinding(M,S)}function c(M,w){let S=n[M.id];S===void 0&&(m(M),S=h(M),n[M.id]=S,M.addEventListener("dispose",v));let R=w.program;i.updateUBOMapping(M,R);let y=t.render.frame;r[M.id]!==y&&(u(M),r[M.id]=y)}function h(M){let w=d();M.__bindingPointIndex=w;let S=s.createBuffer(),R=M.__size,y=M.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,R,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=n[M.id],S=M.uniforms,R=M.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let y=0,E=S.length;y<E;y++){let P=S[y];if(Array.isArray(P))for(let F=0,L=P.length;F<L;F++)f(P[F],y,F,R);else f(P,y,0,R)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(M,w,S,R){if(x(M,w,S,R)===!0){let y=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let F=0;F<E.length;F++){let L=E[F],B=p(L);g(L,M.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,M.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,M.__data)}}function g(M,w,S){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,S)}function x(M,w,S,R){let y=M.value,E=w+"_"+S;if(R[E]===void 0)return typeof y=="number"||typeof y=="boolean"?R[E]=y:ArrayBuffer.isView(y)?R[E]=y.slice():R[E]=y.clone(),!0;{let P=R[E];if(typeof y=="number"||typeof y=="boolean"){if(P!==y)return R[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(P.equals(y)===!1)return P.copy(y),!0}}return!1}function m(M){let w=M.uniforms,S=0,R=16;for(let E=0,P=w.length;E<P;E++){let F=Array.isArray(w[E])?w[E]:[w[E]];for(let L=0,B=F.length;L<B;L++){let I=F[L],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,W=k.length;X<W;X++){let it=k[X],q=p(it),j=S%R,Q=j%q.boundary,Ct=j+Q;S+=Q,Ct!==0&&R-Ct<q.storage&&(S+=R-Ct),I.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=q.storage}}}let y=S%R;return y>0&&(S+=R-y),M.__size=S,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),w}function v(M){let w=M.target;w.removeEventListener("dispose",v);let S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function T(){for(let M in n)s.deleteBuffer(n[M]);o=[],n={},r={}}return{bind:l,update:c,dispose:T}}var v_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),dn=null;function M_(){return dn===null&&(dn=new Vr(v_,16,16,Qn,ei),dn.name="DFG_LUT",dn.minFilter=Ve,dn.magFilter=Ve,dn.wrapS=nn,dn.wrapT=nn,dn.generateMipmaps=!1,dn.needsUpdate=!0),dn}var gs=class{constructor(t={}){let{canvas:e=pd(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=yi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;let x=f,m=new Set([sl,nl,il]),p=new Set([yi,qi,rr,or,Qa,tl]),v=new Uint32Array(4),T=new Int32Array(4),M=new C,w=null,S=null,R=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,L=null,B=null,I=null,k=null;this._outputColorSpace=Re;let X=0,W=0,it=null,q=-1,j=null,Q=new Ce,Ct=new Ce,Dt=null,Me=new rt(0),ne=0,le=e.width,$=e.height,tt=1,bt=null,Ot=null,vt=new Ce(0,0,le,$),Xt=new Ce(0,0,le,$),Xe=!1,$t=new Qs,re=!1,be=!1,Jt=new de,Ae=new C,$e=new Ce,xi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ie=!1;function Be(){return it===null?tt:1}let U=i;function ni(b,D){return e.getContext(b,D)}let me,A,_,z,V,Y,st,at,Z,K,lt,Pt,dt,ct,It,Ft,Ht,N,ht,J,ut,gt,et;try{let b={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Se,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Oi,!1),U===null){let D="webgl2";if(U=ni(D,b),U===null)throw ni(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(b){throw e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Oi,!1),kt("WebGLRenderer: "+b.message),b}function Nt(){me=new Rg(U),me.init(),ut=new p_(U,me),A=new _g(U,me,t,ut),_=new d_(U,me),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=U.createFramebuffer(),I=U.createFramebuffer(),k=U.createFramebuffer(),z=new Ig(U),V=new jx,Y=new f_(U,me,_,V,A,ut,z),st=new Ag(P),at=new Dp(U),gt=new gg(U,at),Z=new Cg(U,at,z,gt),K=new Dg(U,Z,at,gt,z),N=new Lg(U,A,Y),It=new yg(V),lt=new Kx(P,st,me,A,gt,It),Pt=new __(P,V),dt=new t_,ct=new o_(me),Ht=new mg(P,st,_,K,g,l),Ft=new u_(P,K,A),et=new y_(U,z,A,_),ht=new xg(U,me,z),J=new Pg(U,me,z),z.programs=lt.programs,P.capabilities=A,P.extensions=me,P.properties=V,P.renderLists=dt,P.shadowMap=Ft,P.state=_,P.info=z}x!==yi&&(E=new Ug(x,e.width,e.height,a,n,r));let Et=new Ch(P,U);this.xr=Et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let b=me.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=me.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(b){b!==void 0&&(tt=b,this.setSize(le,$,!1))},this.getSize=function(b){return b.set(le,$)},this.setSize=function(b,D,G=!0){if(Et.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}le=b,$=D,e.width=Math.floor(b*tt),e.height=Math.floor(D*tt),G===!0&&(e.style.width=b+"px",e.style.height=D+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(le*tt,$*tt).floor()},this.setDrawingBufferSize=function(b,D,G){le=b,$=D,tt=G,e.width=Math.floor(b*G),e.height=Math.floor(D*G),this.setViewport(0,0,b,D)},this.setEffects=function(b){if(x===yi){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let D=0;D<b.length;D++)if(b[D].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(vt)},this.setViewport=function(b,D,G,O){b.isVector4?vt.set(b.x,b.y,b.z,b.w):vt.set(b,D,G,O),_.viewport(Q.copy(vt).multiplyScalar(tt).round())},this.getScissor=function(b){return b.copy(Xt)},this.setScissor=function(b,D,G,O){b.isVector4?Xt.set(b.x,b.y,b.z,b.w):Xt.set(b,D,G,O),_.scissor(Ct.copy(Xt).multiplyScalar(tt).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(b){_.setScissorTest(Xe=b)},this.setOpaqueSort=function(b){bt=b},this.setTransparentSort=function(b){Ot=b},this.getClearColor=function(b){return b.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor(...arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha(...arguments)},this.clear=function(b=!0,D=!0,G=!0){let O=0;if(b){let H=!1;if(it!==null){let mt=it.texture.format;H=m.has(mt)}if(H){let mt=it.texture.type,Mt=p.has(mt),pt=Ht.getClearColor(),St=Ht.getClearAlpha(),At=pt.r,Vt=pt.g,Zt=pt.b;Mt?(v[0]=At,v[1]=Vt,v[2]=Zt,v[3]=St,U.clearBufferuiv(U.COLOR,0,v)):(T[0]=At,T[1]=Vt,T[2]=Zt,T[3]=St,U.clearBufferiv(U.COLOR,0,T))}else O|=U.COLOR_BUFFER_BIT}D&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){e.removeEventListener("webglcontextlost",Se,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Oi,!1),Ht.dispose(),dt.dispose(),ct.dispose(),V.dispose(),st.dispose(),K.dispose(),gt.dispose(),et.dispose(),lt.dispose(),Et.dispose(),Et.removeEventListener("sessionstart",$h),Et.removeEventListener("sessionend",Zh),ss.stop()};function Se(b){b.preventDefault(),Ur("WebGLRenderer: Context Lost."),F=!0}function he(){Ur("WebGLRenderer: Context Restored."),F=!1;let b=z.autoReset,D=Ft.enabled,G=Ft.autoUpdate,O=Ft.needsUpdate,H=Ft.type;Nt(),z.autoReset=b,Ft.enabled=D,Ft.autoUpdate=G,Ft.needsUpdate=O,Ft.type=H}function Oi(b){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ji(b){let D=b.target;D.removeEventListener("dispose",ji),Bf(D)}function Bf(b){Of(b),V.remove(b)}function Of(b){let D=V.get(b).programs;D!==void 0&&(D.forEach(function(G){lt.releaseProgram(G)}),b.isShaderMaterial&&lt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,G,O,H,mt){D===null&&(D=xi);let Mt=H.isMesh&&H.matrixWorld.determinantAffine()<0,pt=Gf(b,D,G,O,H);_.setMaterial(O,Mt);let St=G.index,At=1;if(O.wireframe===!0){if(St=Z.getWireframeAttribute(G),St===void 0)return;At=2}let Vt=G.drawRange,Zt=G.attributes.position,wt=Vt.start*At,ue=(Vt.start+Vt.count)*At;mt!==null&&(wt=Math.max(wt,mt.start*At),ue=Math.min(ue,(mt.start+mt.count)*At)),St!==null?(wt=Math.max(wt,0),ue=Math.min(ue,St.count)):Zt!=null&&(wt=Math.max(wt,0),ue=Math.min(ue,Zt.count));let Oe=ue-wt;if(Oe<0||Oe===1/0)return;gt.setup(H,O,pt,G,St);let Te,ye=ht;if(St!==null&&(Te=at.get(St),ye=J,ye.setIndex(Te)),H.isMesh)O.wireframe===!0?(_.setLineWidth(O.wireframeLinewidth*Be()),ye.setMode(U.LINES)):ye.setMode(U.TRIANGLES);else if(H.isLine){let si=O.linewidth;si===void 0&&(si=1),_.setLineWidth(si*Be()),H.isLineSegments?ye.setMode(U.LINES):H.isLineLoop?ye.setMode(U.LINE_LOOP):ye.setMode(U.LINE_STRIP)}else H.isPoints?ye.setMode(U.POINTS):H.isSprite&&ye.setMode(U.TRIANGLES);if(H.isBatchedMesh)if(me.get("WEBGL_multi_draw"))ye.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let si=H._multiDrawStarts,yt=H._multiDrawCounts,fi=H._multiDrawCount,se=St?at.get(St).bytesPerElement:1,Ci=V.get(O).currentProgram.getUniforms();for(let Qi=0;Qi<fi;Qi++)Ci.setValue(U,"_gl_DrawID",Qi),ye.render(si[Qi]/se,yt[Qi])}else if(H.isInstancedMesh)ye.renderInstances(wt,Oe,H.count);else if(G.isInstancedBufferGeometry){let si=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,yt=Math.min(G.instanceCount,si);ye.renderInstances(wt,Oe,yt)}else ye.render(wt,Oe)};function Yh(b,D,G,O){L!==null&&b.isNodeMaterial&&L.setObject(O,b),re===!0&&It.setState(b,G,!1),b.transparent===!0&&b.side===Ke&&b.forceSinglePass===!1?(b.side=ti,b.needsUpdate=!0,zo(b,D,O),b.side=$n,b.needsUpdate=!0,zo(b,D,O),b.side=Ke):zo(b,D,O)}this.compile=function(b,D,G=null){G===null&&(G=b),L!==null&&L.renderStart(b,D,G),S=ct.get(G),S.init(D),y.push(S),G.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),b!==G&&b.traverseVisible(function(H){H.isLight&&H.layers.test(D.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights(),L!==null&&L.updateLights(S.state.lightsArray),be=this.localClippingEnabled,re=It.init(this.clippingPlanes,be),re===!0&&It.setGlobalState(this.clippingPlanes,D),L!==null&&Ft.render(S.state.shadowsArray,G,D);let O=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let mt=H.material;if(mt)if(Array.isArray(mt))for(let Mt=0;Mt<mt.length;Mt++){let pt=mt[Mt];Yh(pt,G,D,H),O.add(pt)}else Yh(mt,G,D,H),O.add(mt)}),S=y.pop(),L!==null&&L.renderEnd(),O},this.compileAsync=function(b,D,G=null){let O=this.compile(b,D,G);return new Promise(H=>{function mt(){if(O.forEach(function(Mt){let St=V.get(Mt).currentProgram;(St===void 0||St.isReady())&&O.delete(Mt)}),O.size===0){H(b);return}setTimeout(mt,10)}me.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let pc=null;function Hf(b){pc&&pc(b)}function $h(){ss.stop()}function Zh(){ss.start()}let ss=new Gd;ss.setAnimationLoop(Hf),typeof self<"u"&&ss.setContext(self),this.setAnimationLoop=function(b){pc=b,Et.setAnimationLoop(b),b===null?ss.stop():ss.start()},Et.addEventListener("sessionstart",$h),Et.addEventListener("sessionend",Zh),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;L!==null&&L.renderStart(b,D);let G=Et.enabled===!0&&Et.isPresenting===!0,O=E!==null&&(it===null||G)&&E.begin(P,it);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Et.enabled===!0&&Et.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Et.cameraAutoUpdate===!0&&Et.updateCamera(D),D=Et.getCamera()),b.isScene===!0&&b.onBeforeRender(P,b,D,it),S=ct.get(b,y.length),S.init(D),S.state.textureUnits=Y.getTextureUnits(),y.push(S),Jt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),$t.setFromProjectionMatrix(Jt,Wi,D.reversedDepth),be=this.localClippingEnabled,re=It.init(this.clippingPlanes,be),w=dt.get(b,R.length),w.init(),R.push(w),Et.enabled===!0&&Et.isPresenting===!0){let Mt=P.xr.getDepthSensingMesh();Mt!==null&&mc(Mt,D,-1/0,P.sortObjects)}mc(b,D,0,P.sortObjects),w.finish(),L!==null&&L.updateLights(S.state.lightsArray),P.sortObjects===!0&&w.sort(bt,Ot),Ie=Et.enabled===!1||Et.isPresenting===!1||Et.hasDepthSensing()===!1,Ie&&Ht.addToRenderList(w,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&It.beginShadows();let H=S.state.shadowsArray;if(Ft.render(H,b,D),re===!0&&It.endShadows(),(O&&E.hasRenderPass())===!1){let Mt=w.opaque,pt=w.transmissive;if(S.setupLights(),D.isArrayCamera){let St=D.cameras;if(pt.length>0)for(let At=0,Vt=St.length;At<Vt;At++){let Zt=St[At];Kh(Mt,pt,b,Zt)}Ie&&Ht.render(b);for(let At=0,Vt=St.length;At<Vt;At++){let Zt=St[At];Jh(w,b,Zt,Zt.viewport)}}else pt.length>0&&Kh(Mt,pt,b,D),Ie&&Ht.render(b),Jh(w,b,D)}it!==null&&W===0&&(Y.updateMultisampleRenderTarget(it),Y.updateRenderTargetMipmap(it)),O&&E.end(P),b.isScene===!0&&b.onAfterRender(P,b,D),gt.resetDefaultState(),q=-1,j=null,y.pop(),y.length>0?(S=y[y.length-1],Y.setTextureUnits(S.state.textureUnits),re===!0&&It.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?w=R[R.length-1]:w=null,L!==null&&L.renderEnd()};function mc(b,D,G,O){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLightProbeGrid)S.pushLightProbeGrid(b);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum($t)){O&&$e.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Jt);let Mt=K.update(b),pt=b.material;pt.visible&&w.push(b,Mt,pt,G,$e.z,null,D)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum($t))){let Mt=K.update(b),pt=b.material;if(O&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),$e.copy(b.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),$e.copy(Mt.boundingSphere.center)),$e.applyMatrix4(b.matrixWorld).applyMatrix4(Jt)),Array.isArray(pt)){let St=Mt.groups;for(let At=0,Vt=St.length;At<Vt;At++){let Zt=St[At],wt=pt[Zt.materialIndex];wt&&wt.visible&&w.push(b,Mt,wt,G,$e.z,Zt,D)}}else pt.visible&&w.push(b,Mt,pt,G,$e.z,null,D)}}let mt=b.children;for(let Mt=0,pt=mt.length;Mt<pt;Mt++)mc(mt[Mt],D,G,O)}function Jh(b,D,G,O){let{opaque:H,transmissive:mt,transparent:Mt}=b;S.setupLightsView(G),re===!0&&It.setGlobalState(P.clippingPlanes,G),O&&_.viewport(Q.copy(O)),H.length>0&&Fo(H,D,G),mt.length>0&&Fo(mt,D,G),Mt.length>0&&Fo(Mt,D,G),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Kh(b,D,G,O){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[O.id]===void 0){let wt=me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[O.id]=new Ue(1,1,{generateMipmaps:!0,type:wt?ei:yi,minFilter:Kn,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:qt.workingColorSpace})}let mt=S.state.transmissionRenderTarget[O.id],Mt=O.viewport||Q;mt.setSize(Mt.z*P.transmissionResolutionScale,Mt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),St=P.getActiveCubeFace(),At=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(Me),ne=P.getClearAlpha(),ne<1&&P.setClearColor(16777215,.5),P.clear(),Ie&&Ht.render(G);let Vt=P.toneMapping;P.toneMapping=Xi;let Zt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),S.setupLightsView(O),re===!0&&It.setGlobalState(P.clippingPlanes,O),Fo(b,G,O),Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt),me.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let ue=0,Oe=D.length;ue<Oe;ue++){let Te=D[ue],{object:ye,geometry:si,material:yt,group:fi}=Te;if(yt.side===Ke&&ye.layers.test(O.layers)){let se=yt.side;yt.side=ti,yt.needsUpdate=!0,jh(ye,G,O,si,yt,fi),yt.side=se,yt.needsUpdate=!0,wt=!0}}wt===!0&&(Y.updateMultisampleRenderTarget(mt),Y.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,St,At),P.setClearColor(Me,ne),Zt!==void 0&&(O.viewport=Zt),P.toneMapping=Vt}function Fo(b,D,G){let O=D.isScene===!0?D.overrideMaterial:null;for(let H=0,mt=b.length;H<mt;H++){let Mt=b[H],{object:pt,geometry:St,group:At}=Mt,Vt=Mt.material;Vt.allowOverride===!0&&O!==null&&(Vt=O),pt.layers.test(G.layers)&&jh(pt,D,G,St,Vt,At)}}function jh(b,D,G,O,H,mt){L!==null&&H.isNodeMaterial&&L.setObject(b,H),b.onBeforeRender(P,D,G,O,H,mt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(P,D,G,O,b,mt),H.transparent===!0&&H.side===Ke&&H.forceSinglePass===!1?(H.side=ti,H.needsUpdate=!0,P.renderBufferDirect(G,D,O,H,b,mt),H.side=$n,H.needsUpdate=!0,P.renderBufferDirect(G,D,O,H,b,mt),H.side=Ke):P.renderBufferDirect(G,D,O,H,b,mt),b.onAfterRender(P,D,G,O,H,mt)}function zo(b,D,G){D.isScene!==!0&&(D=xi);let O=V.get(b),H=S.state.lights,mt=S.state.shadowsArray,Mt=H.state.version,pt=lt.getParameters(b,H.state,mt,D,G,S.state.lightProbeGridArray),St=lt.getProgramCacheKey(pt),At=O.programs;O.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?D.environment:null,O.fog=D.fog;let Vt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;O.envMap=st.get(b.envMap||O.environment,Vt),O.envMapRotation=O.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,At===void 0&&(b.addEventListener("dispose",ji),At=new Map,O.programs=At);let Zt=At.get(St);if(Zt!==void 0){if(O.currentProgram===Zt&&O.lightsStateVersion===Mt)return tu(b,pt),Zt}else pt.uniforms=lt.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,G,pt),b.onBeforeCompile(pt,P),Zt=lt.acquireProgram(pt,St),At.set(St,Zt),O.uniforms=pt.uniforms;let wt=O.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(wt.clippingPlanes=It.uniform),tu(b,pt),O.needsLights=Xf(b),O.lightsStateVersion=Mt,O.needsLights&&(wt.ambientLightColor.value=H.state.ambient,wt.lightProbe.value=H.state.probe,wt.sunLights.value=H.state.sun,wt.sunLightShadows.value=H.state.sunShadow,wt.directionalLights.value=H.state.directional,wt.directionalLightShadows.value=H.state.directionalShadow,wt.spotLights.value=H.state.spot,wt.spotLightShadows.value=H.state.spotShadow,wt.rectAreaLights.value=H.state.rectArea,wt.ltc_1.value=H.state.rectAreaLTC1,wt.ltc_2.value=H.state.rectAreaLTC2,wt.pointLights.value=H.state.point,wt.pointLightShadows.value=H.state.pointShadow,wt.hemisphereLights.value=H.state.hemi,wt.sunShadowMatrix.value=H.state.sunShadowMatrix,wt.sunShadowCascade.value=H.state.sunShadowCascade,wt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,wt.spotLightMatrix.value=H.state.spotLightMatrix,wt.spotLightMap.value=H.state.spotLightMap,wt.pointShadowMatrix.value=H.state.pointShadowMatrix),O.lightProbeGrid=S.state.lightProbeGridArray.length>0,O.currentProgram=Zt,O.uniformsList=null,Zt}function Qh(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=cr.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function tu(b,D){let G=V.get(b);G.outputColorSpace=D.outputColorSpace,G.batching=D.batching,G.batchingColor=D.batchingColor,G.instancing=D.instancing,G.instancingColor=D.instancingColor,G.instancingMorph=D.instancingMorph,G.skinning=D.skinning,G.morphTargets=D.morphTargets,G.morphNormals=D.morphNormals,G.morphColors=D.morphColors,G.morphTargetsCount=D.morphTargetsCount,G.numClippingPlanes=D.numClippingPlanes,G.numIntersection=D.numClipIntersection,G.vertexAlphas=D.vertexAlphas,G.vertexTangents=D.vertexTangents,G.toneMapping=D.toneMapping}function Vf(b,D){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let G=0,O=b.length;G<O;G++){let H=b[G];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function Gf(b,D,G,O,H){D.isScene!==!0&&(D=xi),Y.resetTextureUnits();let mt=D.fog,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?D.environment:null,pt=it===null?P.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:qt.workingColorSpace,St=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,At=st.get(O.envMap||Mt,St),Vt=O.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Zt=!!G.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),wt=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,Oe=!!G.morphAttributes.color,Te=Xi;O.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Te=P.toneMapping);let ye=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,si=ye!==void 0?ye.length:0,yt=V.get(O),fi=S.state.lights;if(re===!0&&(be===!0||b!==j)){let we=b===j&&O.id===q;It.setState(O,b,we)}let se=!1;O.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==fi.state.version||yt.outputColorSpace!==pt||H.isBatchedMesh&&yt.batching===!1||!H.isBatchedMesh&&yt.batching===!0||H.isBatchedMesh&&yt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&yt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&yt.instancing===!1||!H.isInstancedMesh&&yt.instancing===!0||H.isSkinnedMesh&&yt.skinning===!1||!H.isSkinnedMesh&&yt.skinning===!0||H.isInstancedMesh&&yt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&yt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&yt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&yt.instancingMorph===!1&&H.morphTexture!==null||yt.envMap!==At||O.fog===!0&&yt.fog!==mt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==It.numPlanes||yt.numIntersection!==It.numIntersection)||yt.vertexAlphas!==Vt||yt.vertexTangents!==Zt||yt.morphTargets!==wt||yt.morphNormals!==ue||yt.morphColors!==Oe||yt.toneMapping!==Te||yt.morphTargetsCount!==si||!!yt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,yt.__version=O.version);let Ci=yt.currentProgram;se===!0&&(Ci=zo(O,D,H),L&&O.isNodeMaterial&&L.onUpdateProgram(O,Ci,yt));let Qi=!1,Dn=!1,Ss=!1,ge=Ci.getUniforms(),ze=yt.uniforms;if(_.useProgram(Ci.program)&&(Qi=!0,Dn=!0,Ss=!0),O.id!==q&&(q=O.id,Dn=!0),yt.needsLights){let we=Vf(S.state.lightProbeGridArray,H);yt.lightProbeGrid!==we&&(yt.lightProbeGrid=we,Dn=!0)}if(Qi||j!==b){_.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ge.setValue(U,"projectionMatrix",b.projectionMatrix),ge.setValue(U,"viewMatrix",b.matrixWorldInverse);let Un=ge.map.cameraPosition;Un!==void 0&&Un.setValue(U,Ae.setFromMatrixPosition(b.matrixWorld)),A.logarithmicDepthBuffer&&ge.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ge.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),j!==b&&(j=b,Dn=!0,Ss=!0)}if(yt.needsLights&&(fi.state.sunShadowMap.length>0&&ge.setValue(U,"sunShadowMap",fi.state.sunShadowMap,Y),fi.state.directionalShadowMap.length>0&&ge.setValue(U,"directionalShadowMap",fi.state.directionalShadowMap,Y),fi.state.spotShadowMap.length>0&&ge.setValue(U,"spotShadowMap",fi.state.spotShadowMap,Y),fi.state.pointShadowMap.length>0&&ge.setValue(U,"pointShadowMap",fi.state.pointShadowMap,Y)),H.isSkinnedMesh){ge.setOptional(U,H,"bindMatrix"),ge.setOptional(U,H,"bindMatrixInverse");let we=H.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ge.setValue(U,"boneTexture",we.boneTexture,Y))}H.isBatchedMesh&&(ge.setOptional(U,H,"batchingTexture"),ge.setValue(U,"batchingTexture",H._matricesTexture,Y),ge.setOptional(U,H,"batchingIdTexture"),ge.setValue(U,"batchingIdTexture",H._indirectTexture,Y),ge.setOptional(U,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(U,"batchingColorTexture",H._colorsTexture,Y));let Nn=G.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&N.update(H,G,Ci),(Dn||yt.receiveShadow!==H.receiveShadow)&&(yt.receiveShadow=H.receiveShadow,ge.setValue(U,"receiveShadow",H.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&D.environment!==null&&(ze.envMapIntensity.value=D.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=M_()),Dn){if(ge.setValue(U,"toneMappingExposure",P.toneMappingExposure),yt.needsLights&&Wf(ze,Ss),mt&&O.fog===!0&&Pt.refreshFogUniforms(ze,mt),Pt.refreshMaterialUniforms(ze,O,tt,$,S.state.transmissionRenderTarget[b.id]),yt.needsLights&&yt.lightProbeGrid){let we=yt.lightProbeGrid;ze.probesSH.value=we.texture,ze.probesMin.value.copy(we.boundingBox.min),ze.probesMax.value.copy(we.boundingBox.max),ze.probesResolution.value.copy(we.resolution)}cr.upload(U,Qh(yt),ze,Y)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(cr.upload(U,Qh(yt),ze,Y),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ge.setValue(U,"center",H.center),ge.setValue(U,"modelViewMatrix",H.modelViewMatrix),ge.setValue(U,"normalMatrix",H.normalMatrix),ge.setValue(U,"modelMatrix",H.matrixWorld),O.uniformsGroups!==void 0){let we=O.uniformsGroups;for(let Un=0,ws=we.length;Un<ws;Un++){let iu=we[Un];et.update(iu,Ci),et.bind(iu,Ci)}}return Ci}function Wf(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.sunLights.needsUpdate=D,b.sunLightShadows.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Xf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return it},this.setRenderTargetTextures=function(b,D,G){let O=V.get(b);O.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),V.get(b.texture).__webglTexture=D,V.get(b.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:G,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,D){let G=V.get(b);G.__webglFramebuffer=D,G.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,G=0){it=b,X=D,W=G;let O=null,H=!1,mt=!1;if(b){let pt=V.get(b);if(pt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(U.FRAMEBUFFER,pt.__webglFramebuffer),Q.copy(b.viewport),Ct.copy(b.scissor),Dt=b.scissorTest,_.viewport(Q),_.scissor(Ct),_.setScissorTest(Dt),q=-1;return}else if(pt.__webglFramebuffer===void 0)Y.setupRenderTarget(b);else if(pt.__hasExternalTextures)Y.rebindTextures(b,V.get(b.texture).__webglTexture,V.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Vt=b.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&V.has(Vt)&&(b.width!==Vt.image.width||b.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(b)}}let St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(mt=!0);let At=V.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(At[D])?O=At[D][G]:O=At[D],H=!0):b.samples>0&&Y.useMultisampledRTT(b)===!1?O=V.get(b).__webglMultisampledFramebuffer:Array.isArray(At)?O=At[G]:O=At,Q.copy(b.viewport),Ct.copy(b.scissor),Dt=b.scissorTest}else Q.copy(vt).multiplyScalar(tt).floor(),Ct.copy(Xt).multiplyScalar(tt).floor(),Dt=Xe;if(G!==0&&(O=B),_.bindFramebuffer(U.FRAMEBUFFER,O)&&_.drawBuffers(b,O),_.viewport(Q),_.scissor(Ct),_.setScissorTest(Dt),H){let pt=V.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,pt.__webglTexture,G)}else if(mt){let pt=D;for(let St=0;St<b.textures.length;St++){let At=V.get(b.textures[St]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+St,At.__webglTexture,G,pt)}}else if(b!==null&&G!==0){let pt=V.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,pt.__webglTexture,G)}q=-1};function eu(b){let D=V.get(b);return(D.__readFormat!==b.format||D.__readType!==b.type)&&(D.__readFormat=b.format,D.__readType=b.type,D.__formatReadable=A.textureFormatReadable(b.format),D.__typeReadable=A.textureTypeReadable(b.type)),D}this.readRenderTargetPixels=function(b,D,G,O,H,mt,Mt,pt=0){if(!(b&&b.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St){_.bindFramebuffer(U.FRAMEBUFFER,St);try{let At=b.textures[pt],Vt=At.format,Zt=At.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let wt=eu(At);if(wt.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(wt.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-O&&G>=0&&G<=b.height-H&&U.readPixels(D,G,O,H,ut.convert(Vt),ut.convert(Zt),mt)}finally{let At=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,At)}}},this.readRenderTargetPixelsAsync=async function(b,D,G,O,H,mt,Mt,pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=V.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Mt!==void 0&&(St=St[Mt]),St)if(D>=0&&D<=b.width-O&&G>=0&&G<=b.height-H){_.bindFramebuffer(U.FRAMEBUFFER,St);let At=b.textures[pt],Vt=At.format,Zt=At.type;b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+pt);let wt=eu(At);if(wt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(wt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ue=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ue),U.bufferData(U.PIXEL_PACK_BUFFER,mt.byteLength,U.STREAM_READ),U.readPixels(D,G,O,H,ut.convert(Vt),ut.convert(Zt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Oe=it!==null?V.get(it).__webglFramebuffer:null;_.bindFramebuffer(U.FRAMEBUFFER,Oe);let Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await gd(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ue),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,mt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ue),U.deleteSync(Te),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,D=null,G=0){let O=Math.pow(2,-G),H=Math.floor(b.image.width*O),mt=Math.floor(b.image.height*O),Mt=D!==null?D.x:0,pt=D!==null?D.y:0;Y.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Mt,pt,H,mt),_.unbindTexture()},this.copyTextureToTexture=function(b,D,G=null,O=null,H=0,mt=0){let Mt,pt,St,At,Vt,Zt,wt,ue,Oe,Te=b.isCompressedTexture?b.mipmaps[mt]:b.image;if(G!==null)Mt=G.max.x-G.min.x,pt=G.max.y-G.min.y,St=G.isBox3?G.max.z-G.min.z:1,At=G.min.x,Vt=G.min.y,Zt=G.isBox3?G.min.z:0;else{let ze=Math.pow(2,-H);Mt=Math.floor(Te.width*ze),pt=Math.floor(Te.height*ze),b.isDataArrayTexture?St=Te.depth:b.isData3DTexture?St=Math.floor(Te.depth*ze):St=1,At=0,Vt=0,Zt=0}O!==null?(wt=O.x,ue=O.y,Oe=O.z):(wt=0,ue=0,Oe=0);let ye=ut.convert(D.format),si=ut.convert(D.type),yt;D.isData3DTexture?(Y.setTexture3D(D,0),yt=U.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Y.setTexture2DArray(D,0),yt=U.TEXTURE_2D_ARRAY):(Y.setTexture2D(D,0),yt=U.TEXTURE_2D),_.activeTexture(U.TEXTURE0),_.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,D.flipY),_.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),_.pixelStorei(U.UNPACK_ALIGNMENT,D.unpackAlignment);let fi=_.getParameter(U.UNPACK_ROW_LENGTH),se=_.getParameter(U.UNPACK_IMAGE_HEIGHT),Ci=_.getParameter(U.UNPACK_SKIP_PIXELS),Qi=_.getParameter(U.UNPACK_SKIP_ROWS),Dn=_.getParameter(U.UNPACK_SKIP_IMAGES);_.pixelStorei(U.UNPACK_ROW_LENGTH,Te.width),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Te.height),_.pixelStorei(U.UNPACK_SKIP_PIXELS,At),_.pixelStorei(U.UNPACK_SKIP_ROWS,Vt),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Zt);let Ss=b.isDataArrayTexture||b.isData3DTexture,ge=D.isDataArrayTexture||D.isData3DTexture;if(b.isDepthTexture){let ze=V.get(b),Nn=V.get(D),we=V.get(ze.__renderTarget),Un=V.get(Nn.__renderTarget);_.bindFramebuffer(U.READ_FRAMEBUFFER,we.__webglFramebuffer),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let ws=0;ws<St;ws++)Ss&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(b).__webglTexture,H,Zt+ws),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,V.get(D).__webglTexture,mt,Oe+ws)),U.blitFramebuffer(At,Vt,Mt,pt,wt,ue,Mt,pt,U.DEPTH_BUFFER_BIT,U.NEAREST);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||V.has(b)){let ze=V.get(b),Nn=V.get(D);_.bindFramebuffer(U.READ_FRAMEBUFFER,I),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,k);for(let we=0;we<St;we++)Ss?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ze.__webglTexture,H,Zt+we):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ze.__webglTexture,H),ge?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Nn.__webglTexture,mt,Oe+we):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Nn.__webglTexture,mt),H!==0?U.blitFramebuffer(At,Vt,Mt,pt,wt,ue,Mt,pt,U.COLOR_BUFFER_BIT,U.NEAREST):ge?U.copyTexSubImage3D(yt,mt,wt,ue,Oe+we,At,Vt,Mt,pt):U.copyTexSubImage2D(yt,mt,wt,ue,At,Vt,Mt,pt);_.bindFramebuffer(U.READ_FRAMEBUFFER,null),_.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ge?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(yt,mt,wt,ue,Oe,Mt,pt,St,ye,si,Te.data):D.isCompressedArrayTexture?U.compressedTexSubImage3D(yt,mt,wt,ue,Oe,Mt,pt,St,ye,Te.data):U.texSubImage3D(yt,mt,wt,ue,Oe,Mt,pt,St,ye,si,Te):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,mt,wt,ue,Mt,pt,ye,si,Te.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,mt,wt,ue,Te.width,Te.height,ye,Te.data):U.texSubImage2D(U.TEXTURE_2D,mt,wt,ue,Mt,pt,ye,si,Te);_.pixelStorei(U.UNPACK_ROW_LENGTH,fi),_.pixelStorei(U.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(U.UNPACK_SKIP_PIXELS,Ci),_.pixelStorei(U.UNPACK_SKIP_ROWS,Qi),_.pixelStorei(U.UNPACK_SKIP_IMAGES,Dn),mt===0&&D.generateMipmaps&&U.generateMipmap(yt),_.unbindTexture()},this.initRenderTarget=function(b){V.get(b).__webglFramebuffer===void 0&&Y.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Y.setTextureCube(b,0):b.isData3DTexture?Y.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Y.setTexture2DArray(b,0):Y.setTexture2D(b,0),_.unbindTexture()},this.resetState=function(){X=0,W=0,it=null,_.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}};var Vl=class extends _i{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Fe;t.deleteAttribute("uv");let e=new ae({side:ti}),i=new ae,n=new Tn(16777215,900,28,2);n.position.set(.418,16.199,.3),this.add(n);let r=new ot(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new Gr(t,i,6),a=new Pe;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new ot(t,dr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ot(t,dr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ot(t,dr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ot(t,dr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ot(t,dr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ot(t,dr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function dr(s){return new Zr({color:0,emissive:16777215,emissiveIntensity:s})}var fr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Ei=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},b_=new cn(-1,1,1,-1,0,1),Ph=class extends _e{constructor(){super(),this.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Yt([0,2,0,0,2,0],2))}},S_=new Ph,es=class{constructor(t){this._mesh=new ot(S_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,b_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Gl=class extends Ei{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof De?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=An.clone(t.uniforms),this.material=new De({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new es(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var bo=class extends Ei{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},Wl=class extends Ei{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Xl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new _t);this._width=i.width,this._height=i.height,e=new Ue(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Gl(fr),this.copyPass.material.blending=Ni,this.timer=new Qr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}bo!==void 0&&(o instanceof bo?i=!0:o instanceof Wl&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new _t);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var ql=class extends Ei{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new rt}render(t,e,i){let n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}};var Jd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var pr=class s extends Ei{constructor(t,e=1,i,n){super(),this.strength=e,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new _t(t.x,t.y):new _t(256,256),this.clearColor=new rt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ue(r,o,{type:ei,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ue(r,o,{type:ei,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ue(r,o,{type:ei,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=Jd;this.highPassUniforms=An.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new De({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new _t(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=An.clone(fr.uniforms),this.blendMaterial=new De({uniforms:this.copyUniforms,vertexShader:fr.vertexShader,fragmentShader:fr.fragmentShader,premultipliedAlpha:!0,blending:Ge,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new rt,this._oldClearAlpha=1,this._basic=new Qt,this._fsQuad=new es(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new _t(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let n=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,c=a+l;n.push((o*a+(o+1)*l)/c),r.push(c)}return new De({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new _t(.5,.5)},direction:{value:new _t(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:n},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new De({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};pr.BlurDirectionX=new _t(1,0);pr.BlurDirectionY=new _t(0,1);var So={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Yl=class extends Ei{constructor(){super(),this.isOutputPass=!0,this.uniforms=An.clone(So.uniforms),this.material=new ir({name:So.name,uniforms:this.uniforms,vertexShader:So.vertexShader,fragmentShader:So.fragmentShader}),this._fsQuad=new es(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===no?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===so?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===un?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===oo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function jd(s,t=!1){let e=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new _e,c=0;for(let h=0;h<s.length;++h){let d=s[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<s.length;++u){let f=s[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=s[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Kd(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in o){let d=o[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<o[h].length;++x)f.push(o[h][x][u]);let g=Kd(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function Kd(s){let t,e,i,n=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Le(o,e,i),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let x=h.getComponent(u,g);a.setComponent(u+d,g,x)}}else o.set(h.array,l);l+=h.count*e}return n!==void 0&&(a.gpuType=n),a}var Qd="STEEL ROYALE";var is={kill:100,assist:30,death:-50},Ih=8,zi={cost:28,time:.22,mult:3.4,regen:22,regenDelay:.45},tf=["ALPHA_WOLF","BETA_7","GAMMA_9","DELTA_KNIGHT","EPSILON_HUNTER","ZETA_SHADOW","ETA_RAZOR","THETA_TITAN","IOTA_PHANTOM","KAPPA_REAPER","LAMBDA_FANG","MU_STORM","NU_VIPER","XI_BREAKER","OMICRON_ACE","SIGMA_BLADE","TAU_HOWLER","OMEGA_CORE"],ns={easy:{label:"EASY",think:.45,reaction:.7,aimErr:.16,aimSpeed:4,lead:.2,skillChance:.35,dodge:.1,dmgMul:.8},normal:{label:"NORMAL",think:.3,reaction:.4,aimErr:.08,aimSpeed:7,lead:.6,skillChance:.65,dodge:.3,dmgMul:1},hard:{label:"HARD",think:.18,reaction:.2,aimErr:.035,aimSpeed:12,lead:.9,skillChance:.95,dodge:.55,dmgMul:1}},ef=[180,300,480,600],Rn=[{id:"vanguard",name:"VANGUARD",role:"\u30A2\u30B5\u30EB\u30C8",desc:"\u653B\u5B88\u306E\u30D0\u30E9\u30F3\u30B9\u306B\u512A\u308C\u305F\u6C4E\u7528\u6A5F\u3002\u30DF\u30B5\u30A4\u30EB\u3068\u30B7\u30FC\u30EB\u30C9\u3067\u4E2D\u8DDD\u96E2\u6226\u3092\u5236\u3059\u308B\u3002",colors:{primary:3829720,secondary:14673390,dark:2764602,glow:5227519},scale:1,radius:1.2,hp:1e3,speed:9.5,energy:100,mass:1,stats:{firepower:3,armor:3,mobility:3,range:4},ai:{range:20},model:{bulk:1,legLen:1,head:"visor",back:"thrusters",weaponR:"rifle",weaponL:"shield",shoulder:"pod"},primary:{kind:"bolt",name:"\u30D3\u30FC\u30E0\u30E9\u30A4\u30D5\u30EB",rate:.22,dmg:42,speed:75,range:40,width:.22,spread:.01},skills:[{id:"missiles",name:"\u30DF\u30B5\u30A4\u30EB\u5F3E\u5E55",cd:8,desc:"\u7167\u6E96\u4ED8\u8FD1\u306E\u6575\u3078\u8FFD\u5C3E\u30DF\u30B5\u30A4\u30EB\u30926\u767A\u767A\u5C04\u3059\u308B\u3002"},{id:"shield",name:"\u30A8\u30CD\u30EB\u30AE\u30FC\u30B7\u30FC\u30EB\u30C9",cd:12,desc:"4\u79D2\u9593\u3001350\u30C0\u30E1\u30FC\u30B8\u3092\u5438\u53CE\u3059\u308B\u30D0\u30EA\u30A2\u3092\u5C55\u958B\u3002"},{id:"grenade",name:"\u30D7\u30E9\u30BA\u30DE\u30B0\u30EC\u30CD\u30FC\u30C9",cd:7,desc:"\u7167\u6E96\u5730\u70B9\u306B\u69B4\u5F3E\u3092\u6295\u64F2\u3002\u7BC4\u56F2\u30C0\u30E1\u30FC\u30B8\uFF0B\u920D\u8DB3\u3002"}],ult:{id:"hyperbeam",name:"\u30CF\u30A4\u30D1\u30FC\u30E1\u30AC\u30D3\u30FC\u30E0",desc:"\u6E9C\u3081\u306E\u5F8C\u3001\u5168\u3066\u3092\u8599\u304E\u6255\u3046\u6975\u592A\u30D3\u30FC\u30E0\u3092\u7167\u5C04\u3059\u308B\u3002"}},{id:"titan",name:"TITAN",role:"\u30D8\u30D3\u30FC",desc:"\u5727\u5012\u7684\u306A\u88C5\u7532\u3068\u5F3E\u5E55\u3092\u8A87\u308B\u91CD\u88C5\u6A5F\u3002\u9045\u3044\u304C\u5012\u308C\u306A\u3044\u3002",colors:{primary:14251563,secondary:4869975,dark:2829617,glow:16756800},scale:1.3,radius:1.6,hp:1650,speed:7.2,energy:100,mass:1.8,stats:{firepower:4,armor:5,mobility:1,range:3},ai:{range:16},model:{bulk:1.45,legLen:.85,head:"bunker",back:"block",weaponR:"gatling",weaponL:"gatling",shoulder:"rocket"},primary:{kind:"gatling",name:"\u30C4\u30A4\u30F3\u30AC\u30C8\u30EA\u30F3\u30B0",rate:.075,dmg:13,speed:62,range:32,width:.14,spread:.07},skills:[{id:"slam",name:"\u30B0\u30E9\u30A6\u30F3\u30C9\u30B9\u30E9\u30E0",cd:9,desc:"\u8DF3\u8E8D\u3057\u3066\u7740\u5730\u3001\u5468\u56F2\u306B\u885D\u6483\u6CE2\u3002\u5439\u304D\u98DB\u3070\u3057\uFF0B\u920D\u8DB3\u3002"},{id:"fortress",name:"\u30D5\u30A9\u30FC\u30C8\u30EC\u30B9",cd:14,desc:"5\u79D2\u9593\u3001\u88AB\u30C0\u30E1\u30FC\u30B8\u534A\u6E1B\u30FB\u9023\u5C04\u901F\u5EA6\u4E0A\u6607\u3002\u79FB\u52D5\u306F\u4F4E\u4E0B\u3002"},{id:"rocket",name:"\u30D8\u30D3\u30FC\u30ED\u30B1\u30C3\u30C8",cd:6,desc:"\u5927\u578B\u30ED\u30B1\u30C3\u30C8\u3092\u767A\u5C04\u3002\u7740\u5F3E\u70B9\u306B\u5927\u7206\u767A\u3002"}],ult:{id:"artillery",name:"\u7832\u6483\u8981\u8ACB",desc:"\u7167\u6E96\u5730\u70B9\u4E00\u5E2F\u306B12\u767A\u306E\u7832\u5F3E\u3092\u964D\u3089\u305B\u308B\u3002"}},{id:"phantom",name:"PHANTOM",role:"\u30B9\u30CA\u30A4\u30D1\u30FC",desc:"\u9577\u5C04\u7A0B\u30EC\u30FC\u30EB\u30AC\u30F3\u3068\u5149\u5B66\u8FF7\u5F69\u3092\u5099\u3048\u305F\u72D9\u6483\u6A5F\u3002\u88C5\u7532\u306F\u8584\u3044\u3002",colors:{primary:7028664,secondary:2302763,dark:1447452,glow:12611839},scale:.95,radius:1.1,hp:760,speed:10.2,energy:110,mass:.85,stats:{firepower:5,armor:1,mobility:4,range:5},ai:{range:34},model:{bulk:.8,legLen:1.15,head:"mono",back:"fins",weaponR:"railgun",weaponL:"none",shoulder:"none"},primary:{kind:"rail",name:"\u30EC\u30FC\u30EB\u30E9\u30A4\u30D5\u30EB",rate:.95,dmg:150,range:58,width:.18},skills:[{id:"cloak",name:"\u5149\u5B66\u8FF7\u5F69",cd:14,desc:"4.5\u79D2\u9593\u900F\u660E\u5316\u3057\u79FB\u52D5\u901F\u5EA6\u4E0A\u6607\u3002\u653B\u6483\u3067\u89E3\u9664\u3001\u521D\u5F3E\u306F1.5\u500D\u3002"},{id:"mine",name:"\u30B9\u30D1\u30A4\u30C0\u30FC\u30DE\u30A4\u30F3",cd:8,desc:"\u8DB3\u5143\u306B\u8FD1\u63A5\u5730\u96F7\u3092\u8A2D\u7F6E\u3059\u308B\uFF08\u6700\u59273\u500B\uFF09\u3002"},{id:"blink",name:"\u30D6\u30EA\u30F3\u30AF",cd:6,desc:"\u7167\u6E96\u65B9\u5411\u3078\u77AC\u9593\u79FB\u52D5\u3059\u308B\u3002"}],ult:{id:"gauss",name:"\u30AC\u30A6\u30B9\u30AD\u30E3\u30CE\u30F3",desc:"\u58C1\u3092\u3082\u8CAB\u901A\u3059\u308B\u8D85\u9577\u8DDD\u96E2\u306E\u4E00\u6483\u3092\u653E\u3064\u3002"}},{id:"razor",name:"RAZOR",role:"\u30D6\u30ED\u30FC\u30E9\u30FC",desc:"\u30D7\u30E9\u30BA\u30DE\u30D6\u30EC\u30FC\u30C9\u3067\u5207\u308A\u8FBC\u3080\u8FD1\u63A5\u7279\u5316\u6A5F\u3002\u9AD8\u901F\u3067\u6575\u306B\u98DF\u3089\u3044\u3064\u304F\u3002",colors:{primary:12593210,secondary:2763312,dark:1710622,glow:16728144},scale:1,radius:1.2,hp:1200,speed:11.2,energy:110,mass:1.1,stats:{firepower:4,armor:3,mobility:5,range:1},ai:{range:3},model:{bulk:1,legLen:1.05,head:"horn",back:"thrusters",weaponR:"blade",weaponL:"blade",shoulder:"spike"},primary:{kind:"blade",name:"\u30D7\u30E9\u30BA\u30DE\u30D6\u30EC\u30FC\u30C9",rate:.42,dmg:72,range:4.6,arc:1.1},skills:[{id:"lunge",name:"\u30E9\u30F3\u30B8\u30B9\u30C8\u30E9\u30A4\u30AF",cd:5,desc:"\u7167\u6E96\u65B9\u5411\u3078\u7A81\u9032\u3057\u3001\u89E6\u308C\u305F\u6575\u3092\u5207\u308A\u88C2\u304F\u3002"},{id:"cyclone",name:"\u30B5\u30A4\u30AF\u30ED\u30F3",cd:10,desc:"2.5\u79D2\u9593\u56DE\u8EE2\u65AC\u308A\u3002\u5468\u56F2\u306B\u9023\u7D9A\u30C0\u30E1\u30FC\u30B8\u3002"},{id:"grapple",name:"\u30B0\u30E9\u30C3\u30D7\u30EB",cd:9,desc:"\u30D5\u30C3\u30AF\u3092\u5C04\u51FA\u3057\u3001\u547D\u4E2D\u3057\u305F\u6575\u3092\u5F15\u304D\u5BC4\u305B\u3066\u30B9\u30BF\u30F3\u3002"}],ult:{id:"berserk",name:"\u30D0\u30FC\u30B5\u30FC\u30AF",desc:"7\u79D2\u9593\u3001\u653B\u6483\u529B\u30FB\u901F\u5EA6\u30FB\u653B\u6483\u901F\u5EA6\u304C\u4E0A\u6607\u3057\u5438\u8840\u52B9\u679C\u3092\u5F97\u308B\u3002"}},{id:"warden",name:"WARDEN",role:"\u30A8\u30F3\u30B8\u30CB\u30A2",desc:"\u30BF\u30EC\u30C3\u30C8\u3068\u30C9\u30ED\u30FC\u30F3\u3092\u64CD\u308B\u6280\u8853\u6A5F\u3002\u56DE\u5FA9\u3068EMP\u3067\u6226\u7DDA\u3092\u652F\u3048\u308B\u3002",colors:{primary:4169290,secondary:14204992,dark:2502696,glow:7405456},scale:1.05,radius:1.25,hp:1050,speed:9.2,energy:100,mass:1,stats:{firepower:3,armor:3,mobility:3,range:3},ai:{range:18},model:{bulk:1.1,legLen:.95,head:"dome",back:"dish",weaponR:"cannon",weaponL:"none",shoulder:"antenna"},primary:{kind:"orb",name:"\u30D7\u30E9\u30BA\u30DE\u30E9\u30F3\u30C1\u30E3\u30FC",rate:.5,dmg:50,speed:40,range:30,aoe:2.6},skills:[{id:"turret",name:"\u30BB\u30F3\u30C8\u30EA\u30FC\u30BF\u30EC\u30C3\u30C8",cd:12,desc:"12\u79D2\u9593\u81EA\u52D5\u3067\u5C04\u6483\u3059\u308B\u30BF\u30EC\u30C3\u30C8\u3092\u8A2D\u7F6E\uFF08\u6700\u59272\u57FA\uFF09\u3002"},{id:"repair",name:"\u30CA\u30CE\u30EA\u30DA\u30A2",cd:14,desc:"3\u79D2\u9593\u3067360\u306E\u8010\u4E45\u3092\u56DE\u5FA9\u3059\u308B\u3002"},{id:"emp",name:"EMP\u30D1\u30EB\u30B9",cd:11,desc:"\u5468\u56F2\u306E\u6575\u306B\u30C0\u30E1\u30FC\u30B8\u3068\u30B9\u30BF\u30F3\u3001\u30A8\u30CD\u30EB\u30AE\u30FC\u3092\u596A\u3046\u3002"}],ult:{id:"drones",name:"\u30C9\u30ED\u30FC\u30F3\u30B9\u30A6\u30A9\u30FC\u30E0",desc:"10\u79D2\u9593\u30016\u6A5F\u306E\u653B\u6483\u30C9\u30ED\u30FC\u30F3\u3092\u968F\u4F34\u3055\u305B\u308B\u3002"}},{id:"inferno",name:"INFERNO",role:"\u30D1\u30A4\u30ED",desc:"\u706B\u708E\u653E\u5C04\u3068\u713C\u5937\u5175\u5668\u3067\u4E00\u5E2F\u3092\u713C\u304D\u5C3D\u304F\u3059\u3002\u8FD1\u8DDD\u96E2\u306E\u5236\u5727\u529B\u306F\u968F\u4E00\u3002",colors:{primary:3026483,secondary:14721056,dark:1776414,glow:16742944},scale:1.1,radius:1.35,hp:1300,speed:9,energy:100,mass:1.3,stats:{firepower:5,armor:4,mobility:2,range:1},ai:{range:6},model:{bulk:1.2,legLen:.9,head:"grille",back:"tanks",weaponR:"flamer",weaponL:"none",shoulder:"vent"},primary:{kind:"flame",name:"\u30D5\u30EC\u30A4\u30E0\u30B9\u30ED\u30EF\u30FC",rate:.1,dmg:15,range:9.5,arc:.45},skills:[{id:"napalm",name:"\u30CA\u30D1\u30FC\u30E0",cd:9,desc:"\u7167\u6E96\u5730\u70B9\u306B5\u79D2\u9593\u71C3\u3048\u7D9A\u3051\u308B\u706B\u306E\u6D77\u3092\u4F5C\u308B\u3002"},{id:"leap",name:"\u30B8\u30A7\u30C3\u30C8\u30EA\u30FC\u30D7",cd:10,desc:"\u7167\u6E96\u5730\u70B9\u3078\u8DF3\u8E8D\u3057\u3001\u7740\u5730\u70B9\u3067\u7206\u767A\u3092\u8D77\u3053\u3059\u3002"},{id:"vent",name:"\u30D2\u30FC\u30C8\u30D9\u30F3\u30C8",cd:8,desc:"\u524D\u65B9\u3078\u71B1\u6CE2\u3092\u653E\u51FA\u3002\u5439\u304D\u98DB\u3070\u3057\uFF0B\u708E\u4E0A\u3002"}],ult:{id:"meltdown",name:"\u30E1\u30EB\u30C8\u30C0\u30A6\u30F3",desc:"\u7089\u5FC3\u3092\u66B4\u8D70\u3055\u305B\u3001\u5468\u56F2\u3092\u5DFB\u304D\u8FBC\u3080\u5927\u7206\u767A\u3092\u8D77\u3053\u3059\u3002"}}],$l=Object.fromEntries(Rn.map(s=>[s.id,s])),nf=.9,sf=1/22,rf=15,mr={respawn:22,repair:350,core:30};var fe=(s,t,e)=>s<t?t:s>e?e:s,Zl=(s,t,e)=>s+(t-s)*e,Ut=(s,t)=>s+Math.random()*(t-s);var of=Math.PI*2;function ki(s){return function(){s|=0,s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Cn(s,t){let e=t-s;for(;e>Math.PI;)e-=of;for(;e<-Math.PI;)e+=of;return e}function wo(s,t,e){let i=Cn(s,t);return Math.abs(i)<=e?t:s+Math.sign(i)*e}function af(s,t,e,i,n,r){let o=e-s,a=i-t,l=o*o+a*a,c=l>0?((n-s)*o+(r-t)*a)/l:0;c=fe(c,0,1);let h=s+o*c,d=t+a*c;return{d:Math.hypot(n-h,r-d),t:c}}function gr(s){s=Math.max(0,Math.ceil(s));let t=Math.floor(s/60),e=s%60;return`${t}:${e.toString().padStart(2,"0")}`}function pn(s){return"#"+s.toString(16).padStart(6,"0")}function Yi(s,t){let e=document.createElement("canvas");return e.width=s,e.height=t,e}function $i(s,t=!0,e=!0){let i=new Sn(s);return t&&(i.wrapS=i.wrapT=Vn),e&&(i.colorSpace=Re),i.anisotropy=4,i.needsUpdate=!0,i}function xs(s,t=1){let e=(s>>16&255)*t,i=(s>>8&255)*t,n=(s&255)*t;return`rgb(${Math.min(255,e)|0},${Math.min(255,i)|0},${Math.min(255,n)|0})`}function _s(s,t,e,i,n,r=.08){let o=s.getImageData(0,0,t,e),a=o.data;for(let l=0;l<a.length;l+=4){let c=(i()-.5)*n;a[l]+=c,a[l+1]+=c,a[l+2]+=c}s.putImageData(o,0,0)}var pe=new Map;function Lh(s){let t="panel"+s;if(pe.has(t))return pe.get(t);let e=256,i=Yi(e,e),n=i.getContext("2d"),r=ki(s);n.fillStyle=xs(s),n.fillRect(0,0,e,e),_s(n,e,e,r,18),n.strokeStyle="rgba(0,0,0,0.45)",n.lineWidth=2;let o=[[0,0,128,96],[128,0,128,64],[128,64,128,128],[0,96,64,160],[64,96,64,80],[64,176,64,80],[128,192,128,64]];for(let[l,c,h,d]of o)n.strokeRect(l+2,c+2,h-4,d-4),n.fillStyle="rgba(255,255,255,0.06)",n.fillRect(l+3,c+3,h-6,3);n.fillStyle="rgba(0,0,0,0.4)";for(let[l,c,h,d]of o)for(let[u,f]of[[l+8,c+8],[l+h-8,c+8],[l+8,c+d-8],[l+h-8,c+d-8]])n.beginPath(),n.arc(u,f,2,0,Math.PI*2),n.fill();for(let l=0;l<40;l++)n.fillStyle=`rgba(20,15,10,${r()*.12})`,n.fillRect(r()*e,r()*e,r()*30,r()*4);n.save(),n.beginPath(),n.rect(10,230,100,16),n.clip();for(let l=-2;l<12;l++)n.fillStyle=l%2?"rgba(20,20,20,0.5)":"rgba(230,190,40,0.5)",n.beginPath(),n.moveTo(10+l*12,246),n.lineTo(22+l*12,230),n.lineTo(34+l*12,230),n.lineTo(22+l*12,246),n.fill();n.restore();let a=$i(i);return pe.set(t,a),a}function Jl(s=1,t=5922662){let e="facade"+s+t;if(pe.has(e))return pe.get(e);let i=256,n=ki(s*977),r=Yi(i,i),o=r.getContext("2d"),a=Yi(i,i),l=a.getContext("2d");o.fillStyle=xs(t),o.fillRect(0,0,i,i),_s(o,i,i,n,22),l.fillStyle="#000",l.fillRect(0,0,i,i);let c=i/4,h=i/4;for(let u=0;u<4;u++){o.fillStyle="rgba(0,0,0,0.35)",o.fillRect(0,u*h+h-6,i,6);for(let f=0;f<4;f++){let g=f*c+10,x=u*h+12,m=c-20,p=h-26,v=n()<.22,T=n()<.12;o.fillStyle=T?"#141414":v?"#c9a25a":"#1d2a33",o.fillRect(g,x,m,p),o.fillStyle="rgba(255,255,255,0.08)",o.fillRect(g,x,m,4),o.strokeStyle="rgba(0,0,0,0.6)",o.lineWidth=2,o.strokeRect(g,x,m,p),o.beginPath(),o.moveTo(g+m/2,x),o.lineTo(g+m/2,x+p),o.stroke(),v&&(l.fillStyle=n()<.5?"#ffb45a":"#ffd890",l.fillRect(g,x,m,p))}}for(let u=0;u<20;u++){let f=n()*i,g=o.createLinearGradient(0,0,0,i);g.addColorStop(0,"rgba(0,0,0,0.15)"),g.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=g,o.fillRect(f,n()*i,3+n()*6,40+n()*80)}let d={map:$i(r),emissive:$i(a)};return pe.set(e,d),d}function lf(){if(pe.has("roof"))return pe.get("roof");let s=128,t=Yi(s,s),e=t.getContext("2d"),i=ki(55);e.fillStyle="#4a4c4f",e.fillRect(0,0,s,s),_s(e,s,s,i,30),e.strokeStyle="rgba(0,0,0,0.3)";for(let r=0;r<s;r+=32)e.beginPath(),e.moveTo(r,0),e.lineTo(r,s),e.stroke(),e.beginPath(),e.moveTo(0,r),e.lineTo(s,r),e.stroke();for(let r=0;r<12;r++)e.fillStyle=`rgba(0,0,0,${i()*.2})`,e.beginPath(),e.arc(i()*s,i()*s,i()*14,0,7),e.fill();let n=$i(t);return pe.set("roof",n),n}function To(s=6974832,t=!1){let e="metal"+s+t;if(pe.has(e))return pe.get(e);let i=128,n=Yi(i,i),r=n.getContext("2d"),o=ki(s+3);r.fillStyle=xs(s),r.fillRect(0,0,i,i),_s(r,i,i,o,26);for(let l=0;l<i;l+=8)r.fillStyle="rgba(255,255,255,0.05)",r.fillRect(l,0,3,i),r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(l+4,0,3,i);for(let l=0;l<30;l++)r.fillStyle=`rgba(${120+o()*60},${50+o()*30},20,${o()*.25})`,r.beginPath(),r.arc(o()*i,o()*i,o()*10,0,7),r.fill();if(t)for(let l=-4;l<12;l++)r.fillStyle=l%2?"#222":"#d8a320",r.beginPath(),r.moveTo(l*16,i),r.lineTo(l*16+16,i-16),r.lineTo(l*16+32,i-16),r.lineTo(l*16+16,i),r.fill();let a=$i(n);return pe.set(e,a),a}function Kl(s=7829370){let t="concrete"+s;if(pe.has(t))return pe.get(t);let e=128,i=Yi(e,e),n=i.getContext("2d"),r=ki(s+11);n.fillStyle=xs(s),n.fillRect(0,0,e,e),_s(n,e,e,r,34),n.strokeStyle="rgba(0,0,0,0.25)",n.strokeRect(1,1,e-2,e-2);for(let a=0;a<6;a++){n.strokeStyle="rgba(0,0,0,0.2)",n.beginPath();let l=r()*e,c=r()*e;n.moveTo(l,c);for(let h=0;h<5;h++)l+=(r()-.5)*30,c+=(r()-.5)*30,n.lineTo(l,c);n.stroke()}let o=$i(i);return pe.set(t,o),o}function Dh(s=9071162){let t="crate"+s;if(pe.has(t))return pe.get(t);let e=128,i=Yi(e,e),n=i.getContext("2d"),r=ki(s);n.fillStyle=xs(s),n.fillRect(0,0,e,e),_s(n,e,e,r,30),n.strokeStyle=xs(s,.55),n.lineWidth=10,n.strokeRect(5,5,e-10,e-10),n.beginPath(),n.moveTo(8,8),n.lineTo(e-8,e-8),n.stroke(),n.lineWidth=2,n.strokeStyle="rgba(0,0,0,0.5)",n.strokeRect(1,1,e-2,e-2);let o=$i(i);return pe.set(t,o),o}function Eo(s){let t="container"+s;if(pe.has(t))return pe.get(t);let e=128,i=Yi(e,e),n=i.getContext("2d"),r=ki(s+7);n.fillStyle=xs(s),n.fillRect(0,0,e,e);for(let a=0;a<e;a+=10)n.fillStyle="rgba(0,0,0,0.18)",n.fillRect(a,0,4,e),n.fillStyle="rgba(255,255,255,0.07)",n.fillRect(a+5,0,2,e);_s(n,e,e,r,20);for(let a=0;a<15;a++)n.fillStyle=`rgba(110,50,20,${r()*.3})`,n.fillRect(r()*e,r()*e,r()*16,r()*16);let o=$i(i);return pe.set(t,o),o}function cf(){if(pe.has("zone"))return pe.get("zone");let s=64,t=256,e=Yi(s,t),i=e.getContext("2d"),n=i.createLinearGradient(0,t,0,0);n.addColorStop(0,"rgba(120,200,255,1)"),n.addColorStop(.25,"rgba(60,140,255,0.55)"),n.addColorStop(1,"rgba(40,90,255,0)"),i.fillStyle=n,i.fillRect(0,0,s,t);for(let o=0;o<t;o+=16)i.fillStyle="rgba(200,240,255,0.25)",i.fillRect(0,o,s,2);i.fillStyle="rgba(220,250,255,0.35)",i.fillRect(0,0,2,t);let r=$i(e,!0,!0);return pe.set("zone",r),r}function hf(){if(pe.has("scorch"))return pe.get("scorch");let s=128,t=Yi(s,s),e=t.getContext("2d"),i=ki(99),n=e.createRadialGradient(s/2,s/2,0,s/2,s/2,s/2);n.addColorStop(0,"rgba(0,0,0,0.85)"),n.addColorStop(.5,"rgba(10,8,6,0.55)"),n.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=n,e.fillRect(0,0,s,s);for(let o=0;o<20;o++){e.strokeStyle="rgba(0,0,0,0.3)",e.beginPath(),e.moveTo(s/2,s/2);let a=i()*7;e.lineTo(s/2+Math.cos(a)*s*.5*i(),s/2+Math.sin(a)*s*.5*i()),e.stroke()}let r=$i(t,!1);return pe.set("scorch",r),r}function uf(){if(pe.has("ring"))return pe.get("ring");let s=128,t=Yi(s,s),e=t.getContext("2d"),i=e.createRadialGradient(s/2,s/2,s*.3,s/2,s/2,s/2);i.addColorStop(0,"rgba(255,255,255,0)"),i.addColorStop(.75,"rgba(255,255,255,0.9)"),i.addColorStop(.9,"rgba(255,255,255,0.4)"),i.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=i,e.fillRect(0,0,s,s);let n=$i(t,!1);return pe.set("ring",n),n}var Ao=85,pf=Ao*2+6,Ai=540,df=.35,ff=3,T_=.8,Pn={uVisTex:{value:null},uVisCenter:{value:new _t},uVisSize:{value:pf},uVisOn:{value:0},uVisStrength:{value:.85},uVisSoft:{value:.9}},mf=`
uniform sampler2D uVisTex; uniform vec2 uVisCenter; uniform float uVisSize; uniform float uVisOn; uniform float uVisStrength; uniform float uVisSoft;`,gf=`
if (uVisOn > 0.5) {
  vec2 vuv = (vCutW.xz - uVisCenter) / uVisSize + 0.5;
  float vis = 0.0;
  if (vuv.x > 0.0 && vuv.x < 1.0 && vuv.y > 0.0 && vuv.y < 1.0) {
    float o = uVisSoft / uVisSize;
    vis = texture2D(uVisTex, vuv).r * 0.4
      + (texture2D(uVisTex, vuv + vec2(o, 0.0)).r + texture2D(uVisTex, vuv - vec2(o, 0.0)).r
      + texture2D(uVisTex, vuv + vec2(0.0, o)).r + texture2D(uVisTex, vuv - vec2(0.0, o)).r) * 0.15;
  }
  float hk = 1.0 - smoothstep(3.0, 9.0, vCutW.y) * 0.65;
  float dk = (1.0 - vis) * uVisStrength * hk;
  float lum = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(lum) * vec3(0.45, 0.52, 0.72) * 0.1, dk);
}`,jl=class{constructor(t,e){this.map=t,this.renderer=e,this.eye=new _t,this.dist=new Float32Array(Ai),this.cos=new Float32Array(Ai),this.sin=new Float32Array(Ai);for(let a=0;a<Ai;a++){let l=a/Ai*Math.PI*2;this.cos[a]=Math.cos(l),this.sin[a]=Math.sin(l)}let i=window.matchMedia&&window.matchMedia("(pointer: coarse)").matches?512:1024;this.rt=new Ue(i,i,{depthBuffer:!1}),this.rt.texture.minFilter=Ve,this.rt.texture.magFilter=Ve,this.rt.texture.generateMipmaps=!1;let n=new Float32Array((Ai+1)*3),r=[];for(let a=0;a<Ai;a++)r.push(0,1+a,1+(a+1)%Ai);this.geo=new _e,this.posAttr=new Le(n,3).setUsage(ts),this.geo.setAttribute("position",this.posAttr),this.geo.setIndex(r),this.fan=new ot(this.geo,new Qt({color:16777215,side:Ke})),this.fan.frustumCulled=!1,this.scene=new _i,this.scene.background=new rt(0),this.scene.add(this.fan);let o=pf/2;this.cam=new cn(-o,o,o,-o,-1,1),this.active=!1}update(t,e){let i=this.map;this.eye.set(t,e);let n=i.occAt(t,e)>=ff,r=this.posAttr.array;r[0]=0,r[1]=0,r[2]=0;for(let l=0;l<Ai;l++){let c=this.cos[l],h=this.sin[l],d=Ao;for(let f=df;f<Ao;f+=df)if(!(n&&f<1)&&i.occAt(t+c*f,e+h*f)>=ff){d=Math.min(Ao,f+T_);break}this.dist[l]=d;let u=3+l*3;r[u]=c*d,r[u+1]=h*d,r[u+2]=0}this.posAttr.needsUpdate=!0,this.geo.computeBoundingSphere();let o=this.renderer,a=o.getRenderTarget();o.setRenderTarget(this.rt),o.render(this.scene,this.cam),o.setRenderTarget(a),Pn.uVisTex.value=this.rt.texture,Pn.uVisCenter.value.set(t,e),this.active=!0}isVisible(t,e,i=0){if(!this.active)return!0;let n=t-this.eye.x,r=e-this.eye.y,o=Math.hypot(n,r);if(o<=1.5+i)return!0;if(o-i>Ao)return!1;let a=Math.atan2(r,n);a<0&&(a+=Math.PI*2);let l=Math.PI*2/Ai,c=Math.round(a/l),h=Math.min(12,Math.ceil(Math.asin(Math.min(1,i/o))/l));for(let d=-h;d<=h;d++){let u=((c+d)%Ai+Ai)%Ai;if(o-i<=this.dist[u])return!0}return!1}dispose(){this.rt.dispose(),this.geo.dispose(),this.fan.material.dispose(),this.active=!1}};var ve=240,ys=2,te=ve/ys,In=8,Bi=ve/In,xr={uCutTarget:{value:new C},uCutCam:{value:new C(0,100,0)},uCutR:{value:6},uCutOn:{value:1}};function Ri(s,t=!0){return s.onBeforeCompile=e=>{Object.assign(e.uniforms,xr,Pn),e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vCutW;`).replace("#include <project_vertex>",`#include <project_vertex>
vCutW = (modelMatrix * vec4(transformed, 1.0)).xyz;`);let i=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vCutW;
uniform vec3 uCutTarget; uniform vec3 uCutCam; uniform float uCutR; uniform float uCutOn;${mf}`).replace("#include <opaque_fragment>",`#include <opaque_fragment>${gf}`);t&&(i=i.replace("void main() {",`void main() {
  if (uCutOn > 0.5 && vCutW.y > 2.4) {
    vec3 ab = uCutCam - uCutTarget; vec3 ap = vCutW - uCutTarget;
    float t = clamp(dot(ap, ab) / dot(ab, ab), 0.0, 1.0);
    float d = length(ap - ab * t);
    if (t > 0.015) {
      float n = fract(sin(dot(floor(gl_FragCoord.xy), vec2(12.9898, 78.233))) * 43758.5453);
      float k = smoothstep(uCutR * 0.55, uCutR, d);
      if (n > k) discard;
    }
  }`)),e.fragmentShader=i},s.customProgramCacheKey=()=>t?"world-cut":"world",s}var Zi=s=>Ri(s,!0);function E_(s,t,e,i,n){let r=s.attributes.uv,o=[[i,e],[i,e],[t,i],[t,i],[t,e],[t,e]];for(let a=0;a<6;a++){let[l,c]=o[a];for(let h=0;h<4;h++){let d=a*4+h;r.setXY(d,r.getX(d)*l/n,r.getY(d)*c/n)}}r.needsUpdate=!0}var Ql=class{constructor(t=20260928){this.rng=ki(t),this.rects=[],this.circles=[],this.occ=new Uint8Array(ve*ve),this.nav=new Uint8Array(te*te),this.hash=Array.from({length:Bi*Bi},()=>[]),this.group=new Kt,this.buckets=new Map,this.pickupSpots=[],this.lights=[],this.makeMaterials(),this.generate(),this.buildMeshes(),this.rasterize(),this.buildNav(),this.buildGround(),this.buildMinimap(),this.g=new Float32Array(te*te),this.came=new Int32Array(te*te),this.stamp=new Uint32Array(te*te),this.closed=new Uint32Array(te*te),this.curStamp=1}makeMaterials(){let t=r=>new ae(r),e=Jl(1,7040885),i=Jl(2,8022618),n=Jl(3,5200480);this.mats={facadeA:Zi(t({map:e.map,emissiveMap:e.emissive,emissive:16777215,emissiveIntensity:.9,roughness:.85,metalness:.1})),facadeB:Zi(t({map:i.map,emissiveMap:i.emissive,emissive:16777215,emissiveIntensity:.9,roughness:.85,metalness:.1})),facadeC:Zi(t({map:n.map,emissiveMap:n.emissive,emissive:16777215,emissiveIntensity:.9,roughness:.8,metalness:.15})),roof:Zi(t({map:lf(),roughness:.9})),metal:Zi(t({map:To(6974832),roughness:.6,metalness:.5})),metalWarm:Zi(t({map:To(8018496),roughness:.65,metalness:.45})),stripe:Zi(t({map:To(5593180,!0),roughness:.6,metalness:.4})),tank:Zi(t({map:To(10132638),roughness:.45,metalness:.6})),concrete:Zi(t({map:Kl(9079430),roughness:.95})),concreteDark:Zi(t({map:Kl(6184540),roughness:.95})),dark:Zi(t({color:2763824,roughness:.5,metalness:.7})),crate:Ri(t({map:Dh(9071162),roughness:.85}),!1),crateG:Ri(t({map:Dh(5925434),roughness:.85}),!1),contR:Ri(t({map:Eo(9188134),roughness:.7,metalness:.3}),!1),contB:Ri(t({map:Eo(3104140),roughness:.7,metalness:.3}),!1),contG:Ri(t({map:Eo(4157504),roughness:.7,metalness:.3}),!1),contY:Ri(t({map:Eo(11569706),roughness:.7,metalness:.3}),!1),carBody:Ri(t({color:5591114,roughness:.5,metalness:.6}),!1),glowO:Ri(t({color:16752704,emissive:16747056,emissiveIntensity:2.2}),!1),glowB:Ri(t({color:6342911,emissive:4239615,emissiveIntensity:2.5}),!1),glowR:Ri(t({color:16728128,emissive:16719904,emissiveIntensity:2}),!1)}}addBox(t,e,i,n,r,o,a,l=4,c=0){let h=new Fe(r,o,a);E_(h,r,o,a,l),c&&h.rotateY(c),h.translate(e,i,n),this.push(t,h)}addCyl(t,e,i,n,r,o,a,l=16,c=4,h=0,d=0){let u=new ke(r,o,a,l),f=u.attributes.uv,g=Math.PI*2*Math.max(r,o);for(let x=0;x<f.count;x++)f.setXY(x,f.getX(x)*g/c,f.getY(x)*a/c);h&&u.rotateX(h),d&&u.rotateZ(d),u.translate(e,i,n),this.push(t,u)}addSphere(t,e,i,n,r,o=!1){let a=new ai(r,16,8,0,Math.PI*2,0,o?Math.PI/2:Math.PI);a.translate(e,i,n),this.push(t,a)}push(t,e){e.index&&(e=e.toNonIndexed()),this.buckets.has(t)||this.buckets.set(t,[]),this.buckets.get(t).push(e)}rect(t,e,i,n,r){let o={x0:Math.min(t,i),z0:Math.min(e,n),x1:Math.max(t,i),z1:Math.max(e,n),h:r};this.rects.push(o),this.addToHash(o,o.x0,o.z0,o.x1,o.z1)}circle(t,e,i,n){let r={x:t,z:e,r:i,h:n};this.circles.push(r),this.addToHash(r,t-i,e-i,t+i,e+i)}addToHash(t,e,i,n,r){let o=fe(Math.floor((e+120)/In),0,Bi-1),a=fe(Math.floor((n+120)/In),0,Bi-1),l=fe(Math.floor((i+120)/In),0,Bi-1),c=fe(Math.floor((r+120)/In),0,Bi-1);for(let h=o;h<=a;h++)for(let d=l;d<=c;d++)this.hash[d*Bi+h].push(t)}building(t,e,i,n,r){let o=this.rng,a=["facadeA","facadeB","facadeC"][Math.floor(o()*3)];this.addBox(a,t,r/2,e,i,r,n,12),this.addBox("roof",t,r+.05,e,i-.1,.12,n-.1,8);let l=.4,c=.8;this.addBox("concreteDark",t,r+c/2,e-n/2+l/2,i,c,l,4),this.addBox("concreteDark",t,r+c/2,e+n/2-l/2,i,c,l,4),this.addBox("concreteDark",t-i/2+l/2,r+c/2,e,l,c,n,4),this.addBox("concreteDark",t+i/2-l/2,r+c/2,e,l,c,n,4),this.addBox("concreteDark",t,1.4,e,i+.3,2.8,n+.3,4),this.addBox("glowO",t,2.9,e+n/2+.2,i*.5,.15,.1);let h=1+Math.floor(o()*3);for(let d=0;d<h;d++){let u=t+(o()-.5)*(i-4),f=e+(o()-.5)*(n-4);o()<.35?(this.addCyl("tank",u,r+1.8,f,1.2,1.2,2.4,12),this.addCyl("dark",u,r+3.1,f,1.3,1.3,.2,12)):this.addBox("metal",u,r+.8,f,1.5+o()*2,1.6,1.5+o()*2,2)}this.rect(t-i/2-.15,e-n/2-.15,t+i/2+.15,e+n/2+.15,Math.min(255,r))}hall(t,e,i,n,r){this.addBox("metalWarm",t,r/2,e,i,r,n,6),this.addBox("metal",t,r+.6,e,i+.6,1.2,n+.6,6),this.addBox("stripe",t,.6,e,i+.2,1.2,n+.2,4),this.addBox("glowO",t,r-1.5,e+n/2+.05,i*.8,.5,.1),this.addBox("glowO",t,r-1.5,e-n/2-.05,i*.8,.5,.1);for(let o=0;o<3;o++)this.addBox("dark",t-i/3+o*i/3,r+1.6,e,1.4,.8,n*.7,2);this.rect(t-i/2-.3,e-n/2-.3,t+i/2+.3,e+n/2+.3,r)}chimney(t,e,i,n){this.addCyl("metal",t,n/2,e,i*.85,i,n,14,3),this.addCyl("stripe",t,n-1.2,e,i*.9,i*.9,2.4,14,2.4),this.addCyl("dark",t,n+.15,e,i*.95,i*.95,.3,14),this.addCyl("concreteDark",t,.6,e,i*1.3,i*1.4,1.2,14),this.lights.push({x:t,y:n+.8,z:e,kind:"smoke"}),this.circle(t,e,i*1.35,n)}tank(t,e,i,n){this.addCyl("tank",t,n/2,e,i,i,n,20,4),this.addSphere("tank",t,n,e,i,!0),this.addCyl("dark",t,n*.3,e,i+.08,i+.08,.3,20),this.addCyl("dark",t,n*.7,e,i+.08,i+.08,.3,20),this.circle(t,e,i+.1,n+i)}pipeRack(t,e,i,n){let r=Math.abs(i-t)>Math.abs(n-e),o=Math.abs(r?i-t:n-e),a=(t+i)/2,l=(e+n)/2,c=Math.max(2,Math.floor(o/5));for(let h=0;h<=c;h++){let d=h/c,u=r?t+(i-t)*d:a,f=r?l:e+(n-e)*d;this.addBox("dark",u,2.4,f,.4,4.8,.4,2)}for(let[h,d,u]of[[-.4,4.2,.35],[.4,4.3,.28],[0,5,.4]])r?this.addCyl("metal",a,d,l+h,u,u,o,10,3,0,Math.PI/2):this.addCyl("metal",a+h,d,l,u,u,o,10,3,Math.PI/2,0);r?this.rect(Math.min(t,i)-.5,l-.9,Math.max(t,i)+.5,l+.9,5.4):this.rect(a-.9,Math.min(e,n)-.5,a+.9,Math.max(e,n)+.5,5.4)}container(t,e,i,n){let r=i?7.2:2.6,o=i?2.6:7.2;this.addBox(n,t,1.35,e,r,2.7,o,3),this.rect(t-r/2,e-o/2,t+r/2,e+o/2,2.7)}crate(t,e,i){this.addBox(this.rng()<.5?"crate":"crateG",t,i/2,e,i,i,i,i),this.rect(t-i/2,e-i/2,t+i/2,e+i/2,i)}barrier(t,e,i,n=3.2){let r=i?n:.8,o=i?.8:n;this.addBox("concrete",t,.6,e,r,1.2,o,2),this.addBox("stripe",t,1.25,e,r*.98,.1,o*.98,2),this.rect(t-r/2,e-o/2,t+r/2,e+o/2,1.2)}car(t,e,i){let n=i?4.4:2,r=i?2:4.4;this.addBox("carBody",t,.75,e,n,.9,r,2),this.addBox("dark",t,1.45,e,i?2.4:1.8,.6,i?1.8:2.4,2);for(let o of[-1,1])for(let a of[-1,1]){let l=t+(i?o*1.4:o*1),c=e+(i?a*1:a*1.4);this.addCyl("dark",l,.4,c,.4,.4,.3,10,2,i?Math.PI/2:0,i?0:Math.PI/2)}this.rect(t-n/2,e-r/2,t+n/2,e+r/2,1.8)}streetLight(t,e){this.addCyl("dark",t,3.5,e,.12,.16,7,8),this.addBox("dark",t,7,e,.2,.2,1.6,2),this.addBox("glowO",t,6.85,e+.6,.4,.12,.5),this.circle(t,e,.35,7)}ruinWall(t,e,i,n){let r=this.rng,o=Math.max(2,Math.floor(n/2));for(let a=0;a<o;a++){let l=(a+.5)/o-.5,c=1.5+r()*5,h=i?t+l*n:t,d=i?e:e+l*n;this.addBox("concrete",h,c/2,d,i?n/o:.8,c,i?.8:n/o,4)}this.rect(i?t-n/2:t-.4,i?e-.4:e-n/2,i?t+n/2:t+.4,i?e+.4:e+n/2,3)}rubble(t,e,i){let n=this.rng;for(let r=0;r<6;r++){let o=new Fe(.6+n()*i*.5,.4+n()*1,.6+n()*i*.5);o.rotateX((n()-.5)*.6),o.rotateZ((n()-.5)*.6),o.rotateY(n()*3),o.translate(t+(n()-.5)*i,.3,e+(n()-.5)*i),this.push("concreteDark",o)}this.rect(t-i*.45,e-i*.45,t+i*.45,e+i*.45,1.4)}generate(){let t=this.rng,e=36,i=12;this.blockSize=e,this.road=i,this.blocks=[];let n=[];for(let o=0;o<5;o++)for(let a=0;a<5;a++){let l=-114+a*(e+i),c=-114+o*(e+i),h;if(a===2&&o===2)h="plaza";else{let d=t();h=d<.34?"tower":d<.64?"factory":d<.86?"yard":"ruins"}n.push(h),this.blocks.push({x0:l,z0:c,x1:l+e,z1:c+e,kind:h})}for(let o of this.blocks){let a=(o.x0+o.x1)/2,l=(o.z0+o.z1)/2;switch(o.kind){case"plaza":this.genPlaza(a,l);break;case"tower":this.genTower(o);break;case"factory":this.genFactory(o);break;case"yard":this.genYard(o);break;case"ruins":this.genRuins(o);break}}let r=[-72,-24,24,72];for(let o=0;o<4;o++)for(let a=0;a<4;a++){let l=r[o],c=r[a];(o+a)%2===0&&this.pickupSpots.push({x:l,z:c,type:(o+a)%4===0?"repair":"core"}),this.streetLight(l+5.2,c+5.2),this.streetLight(l-5.2,c-5.2)}this.pickupSpots.push({x:0,z:-10,type:"core"},{x:0,z:10,type:"repair"});for(let o=0;o<18;o++){let a=t()<.5,l=r[Math.floor(t()*4)],c=-100+t()*200;if(r.some(d=>Math.abs(d-c)<10)||Math.abs(c)<12)continue;let h=(t()<.5?-1:1)*3.2;a?t()<.6?this.car(c,l+h,!0):this.barrier(c,l+h,!0):t()<.6?this.car(l+h,c,!1):this.barrier(l+h,c,!1)}for(let o of[-1,1])this.addBox("concreteDark",0,2,o*121,ve+4,4,2,4),this.addBox("concreteDark",o*121,2,0,2,4,ve+4,4),this.addBox("stripe",0,4.1,o*121,ve+4,.25,2.05,4),this.addBox("stripe",o*121,4.1,0,2.05,.25,ve+4,4)}genPlaza(t,e){this.addCyl("concreteDark",t,.6,e,5,5.4,1.2,24),this.addCyl("metal",t,2.2,e,3.2,3.6,2.2,20),this.addCyl("glowB",t,5,e,1.4,1.4,6,16),this.addCyl("dark",t,4.2,e,2,2,.4,16),this.addCyl("dark",t,6.4,e,2,2,.4,16),this.addCyl("dark",t,8.2,e,1.8,1.6,.6,16),this.circle(t,e,5.2,8.5),this.lights.push({x:t,y:6,z:e,kind:"core"});for(let[i,n,r]of[[-11,-11,!0],[11,11,!0],[-11,11,!1],[11,-11,!1]])this.barrier(t+i,e+n,r,5);for(let[i,n]of[[-14,0],[14,0]])this.crate(t+i,e+n,2)}genTower(t){let e=this.rng,i=15.5,n=5,r=0;for(let o=0;o<2;o++)for(let a=0;a<2;a++){let l=t.x0+o*(i+n),c=t.z0+a*(i+n);if(r<3&&e()<.78){let h=9+e()*6.5,d=9+e()*6.5,u=8+Math.floor(e()*5)*3,f=l+i/2+(e()-.5)*(i-h),g=c+i/2+(e()-.5)*(i-d);this.building(f,g,h,d,u),r++}else for(let h=0;h<3;h++)this.crate(l+3+e()*(i-6),c+3+e()*(i-6),1.4+e()*.8)}}genFactory(t){let e=this.rng,i=e()<.5,n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,o=e()<.5?-1:1,a,l,c,h;i?(c=22+e()*8,h=11+e()*3,a=n+(e()-.5)*4,l=r+o*(18-h/2-1)):(c=11+e()*3,h=22+e()*8,l=r+(e()-.5)*4,a=n+o*(18-c/2-1)),this.hall(a,l,c,h,7+e()*3);let d=i?n:n-o*9,u=i?r-o*9:r,f=1+Math.floor(e()*3);for(let g=0;g<f;g++){let x=d+(i?(g-(f-1)/2)*9:(e()-.5)*4),m=u+(i?(e()-.5)*4:(g-(f-1)/2)*9);e()<.5?this.chimney(x,m,1.1+e()*.5,16+e()*10):this.tank(x,m,2.4+e()*1,5+e()*3)}e()<.7&&(i?this.pipeRack(t.x0+3,u+o*5.5,t.x1-3,u+o*5.5):this.pipeRack(d+o*5.5,t.z0+3,d+o*5.5,t.z1-3))}genYard(t){let e=this.rng,i=["contR","contB","contG","contY"],n=(t.x0+t.x1)/2,r=(t.z0+t.z1)/2,o=[],a=3+Math.floor(e()*3);for(let l=0;l<a*3&&o.length<a;l++){let c=e()<.5,h=n+(e()-.5)*24,d=r+(e()-.5)*24,u=c?7.2:2.6,f=c?2.6:7.2;o.some(g=>Math.abs(g.x-h)<(g.w+u)/2+3.5&&Math.abs(g.z-d)<(g.d+f)/2+3.5)||(o.push({x:h,z:d,w:u,d:f}),this.container(h,d,c,i[Math.floor(e()*4)]),e()<.3&&this.addBox(i[Math.floor(e()*4)],h,4.05,d,u,2.7,f,3))}for(let l=0;l<5;l++){let c=n+(e()-.5)*30,h=r+(e()-.5)*30;o.some(d=>Math.abs(d.x-c)<d.w/2+3&&Math.abs(d.z-h)<d.d/2+3)||this.crate(c,h,1.4+e()*.8)}this.barrier(t.x0+4,t.z0+4,!0),this.barrier(t.x1-4,t.z1-4,!1)}genRuins(t){let e=this.rng,i=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2;this.ruinWall(i-8,n-12,!0,12),this.ruinWall(i+12,n+4,!1,14),this.ruinWall(i-13,n+8,!1,8);for(let r=0;r<3;r++)this.rubble(i+(e()-.5)*22,n+(e()-.5)*22,3+e()*2);this.car(i+4,n-3,e()<.5)}buildMeshes(){for(let[t,e]of this.buckets){let i=jd(e,!1);for(let r of e)r.dispose();i.computeBoundingSphere();let n=new ot(i,this.mats[t]);n.castShadow=!t.startsWith("glow"),n.receiveShadow=!0,this.group.add(n)}this.buckets.clear()}rasterize(){let t=this.occ;for(let e of this.rects){let i=fe(Math.ceil(e.h*10)/10,.1,255);for(let n=Math.floor(e.z0+120);n<Math.ceil(e.z1+120);n++)for(let r=Math.floor(e.x0+120);r<Math.ceil(e.x1+120);r++){if(r<0||n<0||r>=ve||n>=ve)continue;let o=r-120+.5,a=n-120+.5;if(o<e.x0-.3||o>e.x1+.3||a<e.z0-.3||a>e.z1+.3)continue;let l=n*ve+r;t[l]=Math.max(t[l],Math.ceil(i))}}for(let e of this.circles)for(let i=Math.floor(e.z-e.r+120);i<=Math.ceil(e.z+e.r+120);i++)for(let n=Math.floor(e.x-e.r+120);n<=Math.ceil(e.x+e.r+120);n++){if(n<0||i<0||n>=ve||i>=ve)continue;let r=n-120+.5,o=i-120+.5;if(Math.hypot(r-e.x,o-e.z)>e.r+.2)continue;let a=i*ve+n;t[a]=Math.max(t[a],Math.ceil(e.h))}}buildNav(){for(let e=0;e<te;e++)for(let i=0;i<te;i++){let n=-120+i*ys+1,r=-120+e*ys+1,o=Math.abs(n)>118||Math.abs(r)>118;if(!o)for(let a=Math.floor(r-1.9+120);a<=Math.floor(r+1.9+120)&&!o;a++)for(let l=Math.floor(n-1.9+120);l<=Math.floor(n+1.9+120);l++){if(l<0||a<0||l>=ve||a>=ve||!this.occ[a*ve+l])continue;let c=l-120+.5,h=a-120+.5;if(Math.hypot(c-n,h-r)<1.9+.2){o=!0;break}}this.nav[e*te+i]=o?1:0}}buildGround(){let e=document.createElement("canvas");e.width=e.height=2048;let i=e.getContext("2d"),n=2048/ve,r=ki(4242);i.fillStyle="#2c2d2f",i.fillRect(0,0,2048,2048);for(let u=0;u<9e3;u++){let f=30+r()*25;i.fillStyle=`rgba(${f},${f},${f+2},0.5)`,i.fillRect(r()*2048,r()*2048,2+r()*3,2+r()*3)}let o=u=>(u+120)*n,a=[-72,-24,24,72];i.setLineDash([n*3,n*3]),i.strokeStyle="rgba(210,170,50,0.7)",i.lineWidth=n*.3;for(let u of a)i.beginPath(),i.moveTo(o(-120),o(u)),i.lineTo(o(120),o(u)),i.stroke(),i.beginPath(),i.moveTo(o(u),o(-120)),i.lineTo(o(u),o(120)),i.stroke();i.setLineDash([]);for(let u of this.blocks){let f=o(u.x0),g=o(u.z0),x=(u.x1-u.x0)*n,m=(u.z1-u.z0)*n;i.fillStyle="#6d6c68",i.fillRect(f-n*1.5,g-n*1.5,x+n*3,m+n*3),i.fillStyle="#4c4b48",i.fillRect(f-n*1.6,g-n*1.6,x+n*3.2,n*.2),i.fillRect(f-n*1.6,g+m+n*1.4,x+n*3.2,n*.2);let p=u.kind==="factory"?"#55524c":u.kind==="yard"?"#5c5a52":u.kind==="plaza"?"#6e6e70":u.kind==="ruins"?"#4e4a44":"#5f6062";i.fillStyle=p,i.fillRect(f,g,x,m),i.strokeStyle="rgba(0,0,0,0.12)",i.lineWidth=1;let v=u.kind==="plaza"?n*3:n*6;for(let T=0;T<=x;T+=v)i.beginPath(),i.moveTo(f+T,g),i.lineTo(f+T,g+m),i.stroke();for(let T=0;T<=m;T+=v)i.beginPath(),i.moveTo(f,g+T),i.lineTo(f+x,g+T),i.stroke();u.kind==="plaza"&&(i.strokeStyle="rgba(80,180,255,0.35)",i.lineWidth=n*.4,i.beginPath(),i.arc(o((u.x0+u.x1)/2),o((u.z0+u.z1)/2),n*9,0,Math.PI*2),i.stroke(),i.beginPath(),i.arc(o((u.x0+u.x1)/2),o((u.z0+u.z1)/2),n*15,0,Math.PI*2),i.stroke())}i.fillStyle="rgba(220,220,210,0.55)";for(let u of a)for(let f of a)for(let[g,x]of[[0,-1],[0,1],[-1,0],[1,0]])for(let m=-4;m<=4;m+=1.4)g===0?i.fillRect(o(u+m-.35),o(f+x*7.5-1.2),n*.7,n*2.4):i.fillRect(o(u+g*7.5-1.2),o(f+m-.35),n*2.4,n*.7);for(let u=0;u<260;u++){let f=r()*2048,g=r()*2048,x=5+r()*40,m=i.createRadialGradient(f,g,0,f,g,x);m.addColorStop(0,`rgba(0,0,0,${.12+r()*.2})`),m.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=m,i.fillRect(f-x,g-x,x*2,x*2)}i.strokeStyle="rgba(15,15,15,0.4)";for(let u=0;u<140;u++){i.lineWidth=1+r(),i.beginPath();let f=r()*2048,g=r()*2048;i.moveTo(f,g);for(let x=0;x<6;x++)f+=(r()-.5)*40,g+=(r()-.5)*40,i.lineTo(f,g);i.stroke()}let l=new Sn(e);l.colorSpace=Re,l.anisotropy=8;let c=new ot(new Di(ve,ve),Ri(new ae({map:l,roughness:.92,metalness:.05}),!1));c.rotation.x=-Math.PI/2,c.receiveShadow=!0,this.group.add(c),this.groundCanvas=e;let h=Kl(3815994).clone();h.repeat.set(60,60),h.needsUpdate=!0;let d=new ot(new Di(700,700),Ri(new ae({map:h,roughness:1,color:7829367}),!1));d.rotation.x=-Math.PI/2,d.position.y=-.05,this.group.add(d)}buildMinimap(){let e=document.createElement("canvas");e.width=e.height=256;let i=e.getContext("2d");i.drawImage(this.groundCanvas,0,0,256,256),i.fillStyle="rgba(10,20,30,0.45)",i.fillRect(0,0,256,256);let n=256/ve;for(let r=0;r<ve;r++)for(let o=0;o<ve;o++){let a=this.occ[r*ve+o];if(!a)continue;let l=Math.min(200,70+a*5);i.fillStyle=`rgb(${l*.75|0},${l*.85|0},${l})`,i.fillRect(o*n,r*n,Math.ceil(n),Math.ceil(n))}this.minimapCanvas=e}occAt(t,e){let i=Math.floor(t+120),n=Math.floor(e+120);return i<0||n<0||i>=ve||n>=ve?255:this.occ[n*ve+i]}blocksAt(t,e,i){return this.occAt(t,e)>i}segmentHit(t,e,i,n,r=1.5){let o=Math.hypot(i-t,n-e),a=Math.max(1,Math.ceil(o/.5));for(let l=1;l<=a;l++){let c=l/a;if(this.occAt(t+(i-t)*c,e+(n-e)*c)>r)return(l-1)/a}return-1}lineOfSight(t,e,i,n,r=1.8){return this.segmentHit(t,e,i,n,r)<0}resolveCircle(t,e){let i=120-e;for(let n=0;n<2;n++){let r=fe(Math.floor((t.x-e+120)/In),0,Bi-1),o=fe(Math.floor((t.x+e+120)/In),0,Bi-1),a=fe(Math.floor((t.z-e+120)/In),0,Bi-1),l=fe(Math.floor((t.z+e+120)/In),0,Bi-1),c=!1;for(let h=r;h<=o;h++)for(let d=a;d<=l;d++)for(let u of this.hash[d*Bi+h])if(u.r!==void 0){let f=t.x-u.x,g=t.z-u.z,x=Math.hypot(f,g),m=u.r+e;if(x<m){let p=x>1e-4?f/x:1,v=x>1e-4?g/x:0;t.x=u.x+p*m,t.z=u.z+v*m,c=!0}}else{let f=fe(t.x,u.x0,u.x1),g=fe(t.z,u.z0,u.z1),x=t.x-f,m=t.z-g,p=x*x+m*m;if(p<e*e){if(p>1e-8){let v=Math.sqrt(p);t.x=f+x/v*e,t.z=g+m/v*e}else{let v=t.x-u.x0,T=u.x1-t.x,M=t.z-u.z0,w=u.z1-t.z,S=Math.min(v,T,M,w);S===v?t.x=u.x0-e:S===T?t.x=u.x1+e:S===M?t.z=u.z0-e:t.z=u.z1+e}c=!0}}if(t.x=fe(t.x,-i,i),t.z=fe(t.z,-i,i),!c)break}return t}isFree(t,e,i=1.5){return Math.abs(t)>120-i||Math.abs(e)>120-i?!1:!this.navBlockedAt(t,e)&&this.occAt(t,e)===0}navIndex(t,e){let i=fe(Math.floor((t+120)/ys),0,te-1);return fe(Math.floor((e+120)/ys),0,te-1)*te+i}navBlockedAt(t,e){return this.nav[this.navIndex(t,e)]===1}navCenter(t,e){return e.x=-120+t%te*ys+1,e.z=-120+Math.floor(t/te)*ys+1,e}navLine(t,e,i,n){let r=Math.hypot(i-t,n-e),o=Math.max(1,Math.ceil(r/.8));for(let a=1;a<=o;a++){let l=a/o;if(this.navBlockedAt(t+(i-t)*l,e+(n-e)*l))return!1}return!0}nearestFreeNav(t){if(!this.nav[t])return t;let e=t%te,i=Math.floor(t/te);for(let n=1;n<8;n++)for(let r=-n;r<=n;r++)for(let o=-n;o<=n;o++){if(Math.max(Math.abs(o),Math.abs(r))!==n)continue;let a=e+o,l=i+r;if(!(a<0||l<0||a>=te||l>=te)&&!this.nav[l*te+a])return l*te+a}return t}findPath(t,e,i,n){let r=this.nearestFreeNav(this.navIndex(t,e)),o=this.nearestFreeNav(this.navIndex(i,n));if(r===o)return[{x:i,z:n}];let a=++this.curStamp,l=this.g,c=this.came,h=this.stamp,d=this.closed,u=o%te,f=Math.floor(o/te),g=L=>{let B=Math.abs(L%te-u),I=Math.abs(Math.floor(L/te)-f);return B+I+(Math.SQRT2-2)*Math.min(B,I)},x=[],m=(L,B)=>{x.push([B,L]);let I=x.length-1;for(;I>0;){let k=I-1>>1;if(x[k][0]<=x[I][0])break;[x[k],x[I]]=[x[I],x[k]],I=k}},p=()=>{let L=x[0],B=x.pop();if(x.length){x[0]=B;let I=0;for(;;){let k=2*I+1,X=k+1,W=I;if(k<x.length&&x[k][0]<x[W][0]&&(W=k),X<x.length&&x[X][0]<x[W][0]&&(W=X),W===I)break;[x[W],x[I]]=[x[I],x[W]],I=W}}return L};l[r]=0,h[r]=a,c[r]=-1,m(r,g(r));let v=r,T=g(r),M=0,w=[[1,0,1],[-1,0,1],[0,1,1],[0,-1,1],[1,1,Math.SQRT2],[1,-1,Math.SQRT2],[-1,1,Math.SQRT2],[-1,-1,Math.SQRT2]];for(;x.length&&M++<8e3;){let[,L]=p();if(d[L]===a)continue;if(d[L]=a,L===o){v=o;break}let B=g(L);B<T&&(T=B,v=L);let I=L%te,k=Math.floor(L/te);for(let[X,W,it]of w){let q=I+X,j=k+W;if(q<0||j<0||q>=te||j>=te)continue;let Q=j*te+q;if(this.nav[Q]||d[Q]===a||X&&W&&(this.nav[k*te+q]||this.nav[j*te+I]))continue;let Ct=l[L]+it;(h[Q]!==a||Ct<l[Q])&&(h[Q]=a,l[Q]=Ct,c[Q]=L,m(Q,Ct+g(Q)))}}let S=[];for(let L=v;L!==-1&&S.length<2e3;L=c[L])S.push(L);S.reverse();let R=S.map(L=>this.navCenter(L,{x:0,z:0}));v===o&&R.push({x:i,z:n});let y=[],E=t,P=e,F=0;for(;F<R.length;){let L=R.length-1;for(;L>F&&!this.navLine(E,P,R[L].x,R[L].z);)L--;y.push(R[L]),E=R[L].x,P=R[L].z,F=L+1}return y}randomFreePoint(t,e,i,n=Math.random){for(let r=0;r<60;r++){let o=n()*Math.PI*2,a=Math.sqrt(n())*i,l=t+Math.cos(o)*a,c=e+Math.sin(o)*a;if(this.isFree(l,c,2))return{x:l,z:c}}return{x:0,z:18}}};var _r=new Map;function Tt(s,t,e){let i=`b${s.toFixed(3)}_${t.toFixed(3)}_${e.toFixed(3)}`,n=_r.get(i);return n||(n=new Fe(s,t,e),_r.set(i,n)),n}function je(s,t,e,i=12){let n=`c${s.toFixed(3)}_${t.toFixed(3)}_${e.toFixed(3)}_${i}`,r=_r.get(n);return r||(r=new ke(s,t,e,i),_r.set(n,r)),r}function Ln(s,t=16,e=12,i=Math.PI*2,n=Math.PI){let r=`s${s.toFixed(3)}_${t}_${e}_${n.toFixed(2)}`,o=_r.get(r);return o||(o=new ai(s,t,e,0,i,0,n),_r.set(r,o)),o}var A_=(()=>{let s=new tr(1,1,10,1,!0);return s.rotateX(Math.PI),s.translate(0,-.5,0),s})();function nt(s,t,e,i=0,n=0,r=0,o=0,a=0,l=0){let c=new ot(s,t);return c.position.set(i,n,r),c.rotation.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,e.add(c),c}function R_(s){let t=s.colors,e=new ae({color:16777215,map:Lh(t.primary),metalness:.55,roughness:.42}),i=new ae({color:16777215,map:Lh(t.secondary),metalness:.5,roughness:.5}),n=new ae({color:t.dark,metalness:.75,roughness:.38}),r=new ae({color:t.glow,emissive:t.glow,emissiveIntensity:2.6,metalness:0,roughness:.4}),o=new ae({color:662052,emissive:t.glow,emissiveIntensity:.6,metalness:.9,roughness:.1}),a=new Qt({color:10475775,transparent:!0,opacity:.55,blending:Ge,depthWrite:!1,side:Ke});return a.color.set(t.glow).lerp(new rt(16777215),.35),{primary:e,secondary:i,dark:n,glow:r,glass:o,flame:a}}var vs=class{constructor(t){this.def=t;let e=t.model,i=e.bulk,n=e.legLen;this.mats=R_(t);let r=this.mats;this.root=new Kt,this.inner=new Kt,this.inner.scale.setScalar(t.scale),this.root.add(this.inner),this.hipY=1.85*n,this.hips=new Kt,this.hips.position.y=this.hipY,this.inner.add(this.hips),nt(Tt(.95*i,.35,.6*i),r.dark,this.hips,0,0,0),nt(Tt(.7*i,.25,.3),r.secondary,this.hips,0,-.05,.3),this.legs=[];for(let l of[-1,1]){let c={};c.hip=new Kt,c.hip.position.set(l*.5*i,-.05,0),this.hips.add(c.hip),nt(Ln(.22*i),r.dark,c.hip),nt(Tt(.4*i,.85*n,.5*i),r.primary,c.hip,0,-.42*n,0),nt(Tt(.44*i,.35*n,.2),r.secondary,c.hip,l*.03,-.35*n,.26*i),c.knee=new Kt,c.knee.position.y=-.85*n,c.hip.add(c.knee),nt(Ln(.2*i),r.dark,c.knee),nt(Tt(.34*i,.28,.25),r.secondary,c.knee,0,.02,.2*i),nt(Tt(.36*i,.85*n,.44*i),r.primary,c.knee,0,-.42*n,-.02),nt(Tt(.18*i,.4*n,.18*i),r.dark,c.knee,0,-.45*n,-.25*i),c.ankle=new Kt,c.ankle.position.y=-.85*n,c.knee.add(c.ankle),nt(Tt(.55*i,.2,1*i),r.dark,c.ankle,0,-.06,.12),nt(Tt(.5*i,.12,.4*i),r.secondary,c.ankle,0,.06,.35*i),this.legs.push(c)}this.torso=new Kt,this.torso.position.y=.2,this.hips.add(this.torso);let o=1.35*i,a=.95*i;nt(Tt(.6*i,.4,.5*i),r.dark,this.torso,0,.15,0),this.chest=nt(Tt(o,.95,a),r.primary,this.torso,0,.75,0),nt(Tt(o*.8,.5,.2),r.secondary,this.torso,0,.85,a/2+.05),nt(Tt(o*.5,.08,.05),r.glow,this.torso,0,.62,a/2+.16),nt(Tt(o*1.05,.2,a*.9),r.dark,this.torso,0,1.25,0),this.head=new Kt,this.head.position.set(0,1.35,.1),this.torso.add(this.head),this.buildHead(e.head,i),this.arms=[],this.muzzles=[];for(let l of[-1,1]){let c={};c.shoulder=new Kt,c.shoulder.position.set(l*(o/2+.28*i),1,0),this.torso.add(c.shoulder),nt(Ln(.24*i),r.dark,c.shoulder),nt(Tt(.55*i,.4*i,.7*i),r.primary,c.shoulder,l*.08,.15,0),nt(Tt(.28*i,.6,.3*i),r.dark,c.shoulder,0,-.35,0),c.elbow=new Kt,c.elbow.position.set(0,-.62,0),c.shoulder.add(c.elbow),nt(Ln(.17*i),r.dark,c.elbow),nt(Tt(.34*i,.34*i,.75),r.secondary,c.elbow,0,0,.3);let h=l>0?e.weaponR:e.weaponL;c.weapon=new Kt,c.weapon.position.set(0,0,.55),c.elbow.add(c.weapon);let d=this.buildWeapon(h,c.weapon,l,i);d&&this.muzzles.push(d),this.arms.push(c)}if(this.buildShoulder(e.shoulder,o,i),this.buildBack(e.back,o,a,i),this.muzzles.length===0){let l=new Pe;l.position.set(0,.9,1),this.torso.add(l),this.muzzles.push(l)}this.muzzles.reverse(),this.flameMeshes=[],this.root.traverse(l=>{l.userData.flame&&this.flameMeshes.push(l)}),this.legsYaw=0,this.walkPhase=0,this.walkAmp=0,this.recoilT=[0,0],this.flashT=0,this.spin=0,this.gatSpin=0,this.thrust=0,this.opacity=1,this.allMats=Object.values(r),this.baseEmissive=this.allMats.map(l=>l.emissive?l.emissive.clone():null),this.baseEmissiveInt=this.allMats.map(l=>l.emissiveIntensity??0)}buildHead(t,e){let i=this.mats,n=this.head;switch(t){case"bunker":nt(Tt(.85,.32,.6),i.secondary,n,0,0,0);for(let r of[-.22,0,.22])nt(Tt(.12,.08,.05),i.glow,n,r,.02,.31);break;case"mono":nt(Tt(.34,.5,.5),i.secondary,n,0,.12,0),nt(je(.1,.1,.08,12),i.glow,n,0,.18,.27,Math.PI/2),nt(Tt(.05,.5,.4),i.primary,n,.2,.25,-.1,.3),nt(Tt(.05,.5,.4),i.primary,n,-.2,.25,-.1,.3);break;case"horn":nt(Tt(.5,.36,.5),i.secondary,n,0,.1,0),nt(Tt(.4,.07,.05),i.glow,n,0,.12,.26),nt(Tt(.06,.5,.06),i.primary,n,.18,.4,.1,0,0,-.5),nt(Tt(.06,.5,.06),i.primary,n,-.18,.4,.1,0,0,.5);break;case"dome":nt(je(.36,.4,.2,16),i.secondary,n,0,0,0),nt(Ln(.34,16,10,Math.PI*2,Math.PI/2),i.glass,n,0,.08,0);break;case"grille":nt(Tt(.6,.42,.55),i.secondary,n,0,.12,0),nt(Tt(.44,.24,.05),i.glow,n,0,.12,.27);for(let r=-2;r<=2;r++)nt(Tt(.04,.3,.06),i.dark,n,r*.09,.12,.3);break;default:nt(Tt(.52,.4,.52),i.secondary,n,0,.12,0),nt(Tt(.46,.1,.05),i.glow,n,0,.16,.27),nt(Tt(.03,.4,.03),i.dark,n,.2,.5,-.1);break}}buildWeapon(t,e,i,n){let r=this.mats,o=new Pe;switch(t){case"rifle":nt(Tt(.24,.32,1.2),r.dark,e,0,-.05,.45),nt(Tt(.26,.12,.6),r.primary,e,0,.14,.3),nt(je(.07,.07,.7,8),r.dark,e,0,0,1.3,Math.PI/2),nt(Tt(.05,.06,.8),r.glow,e,.13,-.02,.5),o.position.set(0,0,1.7);break;case"gatling":{nt(Tt(.45,.45,.7),r.dark,e,0,0,.2);let a=new Kt;a.position.set(0,0,.6),e.add(a);for(let l=0;l<6;l++){let c=l/6*Math.PI*2;nt(je(.05,.05,1,6),r.dark,a,Math.cos(c)*.14,Math.sin(c)*.14,.45,Math.PI/2)}nt(je(.22,.22,.12,12),r.primary,a,0,0,.75,Math.PI/2),this.gatlings=this.gatlings||[],this.gatlings.push(a),o.position.set(0,0,1.2);break}case"railgun":nt(Tt(.3,.3,.8),r.dark,e,0,0,.2),nt(Tt(.07,.1,2.4),r.secondary,e,.1,0,1.4),nt(Tt(.07,.1,2.4),r.secondary,e,-.1,0,1.4),nt(Tt(.05,.05,2.2),r.glow,e,0,0,1.4),nt(Tt(.1,.2,.3),r.primary,e,0,.18,.4),o.position.set(0,0,2.7);break;case"blade":nt(Tt(.3,.3,.5),r.dark,e,0,0,.1),nt(Tt(.06,.26,1.9),r.glow,e,i*.12,0,1.2),nt(Tt(.1,.3,.3),r.primary,e,i*.12,0,.25),o.position.set(0,0,1.2);break;case"cannon":nt(je(.26,.3,.9,12),r.dark,e,0,0,.45,Math.PI/2),nt(je(.3,.3,.2,12),r.secondary,e,0,0,.8,Math.PI/2),nt(Ln(.2),r.glow,e,0,0,1),o.position.set(0,0,1.25);break;case"flamer":nt(Tt(.34,.34,.6),r.dark,e,0,0,.2),nt(je(.1,.16,.8,10),r.secondary,e,0,0,.85,Math.PI/2),nt(je(.05,.05,.9,6),r.dark,e,.18,.1,.5,Math.PI/2),nt(Ln(.06),r.glow,e,0,-.13,1.25),o.position.set(0,0,1.35);break;case"shield":return nt(Tt(.12,1.1,.9),r.secondary,e,i*.25,-.1,.1),nt(Tt(.14,.7,.08),r.glow,e,i*.25,-.1,.1),null;default:return nt(Tt(.34,.3,.34),r.dark,e,0,0,.1),null}return e.add(o),o}buildShoulder(t,e,i){let n=this.mats,r=this.arms[0].shoulder,o=this.arms[1].shoulder;switch(t){case"pod":{let a=new Kt;a.position.set(-.1,.55,-.1),r.add(a),nt(Tt(.55,.45,.7),n.secondary,a);for(let l=0;l<3;l++)for(let c=0;c<2;c++)nt(je(.06,.06,.05,8),n.glow,a,-.15+l*.15,-.08+c*.16,.36,Math.PI/2);break}case"rocket":{let a=new Kt;a.position.set(.1,.65,-.05),o.add(a),nt(Tt(.7,.55,1.1),n.secondary,a);for(let l=0;l<2;l++)for(let c=0;c<2;c++)nt(je(.1,.1,.05,10),n.dark,a,-.17+l*.34,-.12+c*.24,.56,Math.PI/2);nt(Tt(.75,.08,.8),n.glow,a,0,.3,-.05);break}case"spike":for(let[a,l]of[[-1,r],[1,o]])nt(new tr(.16,.7,6),n.secondary,l,a*.18,.5,-.05,0,0,-a*.5);break;case"antenna":nt(je(.025,.025,1.4,6),n.dark,r,0,1,-.2),nt(Ln(.07),n.glow,r,0,1.72,-.2);break;case"vent":for(let a of[r,o])nt(je(.12,.14,.6,8),n.dark,a,0,.55,-.15),nt(je(.09,.09,.05,8),n.glow,a,0,.86,-.15);break;default:break}}buildBack(t,e,i,n){let r=this.mats,o=this.torso,a=new Kt;a.position.set(0,.8,-i/2-.1),o.add(a);let l=(c,h,d,u=1)=>{nt(je(.14*u,.2*u,.4*u,10),r.dark,a,c,h,d);let f=new ot(A_,r.flame);f.position.set(c,h-.2*u,d),f.scale.set(.16*u,.6,.16*u),f.userData.flame=u,a.add(f)};switch(t){case"block":nt(Tt(e*.9,.9,.6),r.secondary,a,0,.1,-.2),nt(Tt(e*.7,.08,.1),r.glow,a,0,.35,-.52),l(-.4,-.45,-.25,1.3),l(.4,-.45,-.25,1.3);break;case"fins":nt(Tt(.06,1,.7),r.primary,a,.3,.5,-.1,-.4,0,.2),nt(Tt(.06,1,.7),r.primary,a,-.3,.5,-.1,-.4,0,-.2),nt(Tt(.5,.5,.35),r.dark,a,0,0,-.1),l(0,-.35,-.15,.9);break;case"dish":nt(Tt(.8,.7,.45),r.secondary,a,0,0,-.1),nt(je(.5,.2,.12,16),r.dark,a,.25,.75,-.25,-.6,0,.3),nt(Ln(.06),r.glow,a,.25,.85,-.2),l(-.25,-.45,-.1,.9),l(.25,-.45,-.1,.9);break;case"tanks":nt(je(.26,.26,1.1,12),r.secondary,a,-.3,.05,-.2),nt(je(.26,.26,1.1,12),r.secondary,a,.3,.05,-.2),nt(Tt(.9,.12,.1),r.glow,a,0,.3,-.48),l(0,-.6,-.15,1.1);break;default:nt(Tt(.8,.7,.4),r.secondary,a,0,0,-.05),l(-.28,-.5,-.1),l(.28,-.5,-.1),nt(Tt(.12,.6,.35),r.primary,a,.52,.2,-.1,0,0,-.2),nt(Tt(.12,.6,.35),r.primary,a,-.52,.2,-.1,0,0,.2);break}}getMuzzle(t,e){let i=this.muzzles[t%this.muzzles.length];return i.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(i.matrixWorld)}recoil(t=0){this.recoilT[t%2]=1}flash(){this.flashT=.12}setOpacity(t){if(Math.abs(t-this.opacity)<.001)return;this.opacity=t;let e=t<.999;for(let i of this.allMats)i!==this.mats.flame&&(i.transparent=e,i.opacity=t,i.depthWrite=!e,i.needsUpdate=!0);this.root.traverse(i=>{i.isMesh&&(i.castShadow=!e)})}update(t,e){let i=1;if(e.moving){let d=e.moveYaw;Math.abs(Cn(e.aimYaw,e.moveYaw))>Math.PI*.6&&(d=e.moveYaw+Math.PI,i=-1),this.legsYaw=wo(this.legsYaw,d,t*10)}else Math.abs(Cn(this.legsYaw,e.aimYaw))>.9&&(this.legsYaw=wo(this.legsYaw,e.aimYaw,t*5));this.root.rotation.y=this.legsYaw;let n=e.moving?fe(e.speedNorm,0,1.3):0;this.walkAmp+=(n-this.walkAmp)*Math.min(1,t*8),this.walkPhase+=t*i*(4+5*e.speedNorm)*(e.moving?1:0);let r=this.walkAmp*(e.boost?.2:1)*(e.airborne?0:1),o=this.walkPhase;for(let d=0;d<2;d++){let u=this.legs[d],f=o+(d===0?0:Math.PI),g=-Math.sin(f)*.55*r-.12-(e.airborne?.5:0),x=.25+Math.max(0,Math.cos(f))*.7*r+(e.airborne?.9:0);u.hip.rotation.x=g,u.knee.rotation.x=x,u.ankle.rotation.x=-(g+x)}let a=Math.abs(Math.cos(o))*.1*r;this.hips.position.y=this.hipY-.08-a+(e.boost?.05:0);let l=Cn(this.legsYaw,e.aimYaw);e.spin?(this.spin+=t*22,this.torso.rotation.y=this.spin):(this.spin=0,this.torso.rotation.y=l);let c=e.boost?.35:e.moving?.08*r:0;this.torso.rotation.x+=(c-this.torso.rotation.x)*Math.min(1,t*8),this.torso.rotation.z=Math.sin(o)*.03*r;for(let d=0;d<2;d++){this.recoilT[d]=Math.max(0,this.recoilT[d]-t*7);let u=this.arms[1-d];u.elbow.position.z=-this.recoilT[d]*.25,u.shoulder.rotation.x=Math.sin(o+(d?0:Math.PI))*.06*r+(e.stunned?.6:0)}if(this.gatlings)for(let d of this.gatlings)d.rotation.z+=t*this.gatSpin;this.gatSpin=Math.max(0,this.gatSpin-t*30);let h=e.boost?1.8:e.airborne?1.4:e.moving?.5:.25;this.thrust+=(h-this.thrust)*Math.min(1,t*12);for(let d of this.flameMeshes){let u=d.userData.flame;d.scale.set(.16*u*(.8+this.thrust*.3),(.3+this.thrust*.9+Math.random()*.15)*u,.16*u*(.8+this.thrust*.3))}if(this.flashT>0||this._flashing){this.flashT-=t;let d=this.flashT>0;this._flashing=d;for(let u=0;u<this.allMats.length;u++){let f=this.allMats[u];!f.emissive||f===this.mats.glow||(d?(f.emissive.setRGB(1,.9,.8),f.emissiveIntensity=.6):(f.emissive.copy(this.baseEmissive[u]),f.emissiveIntensity=this.baseEmissiveInt[u]))}}}dispose(){for(let t of this.allMats)t.dispose()}};var iS=new C,ee=new C,ec=new C;function Ji(s,t=0){return s.model.getMuzzle(t,new C)}function mn(s){return{x:Math.sin(s),z:Math.cos(s)}}function Ro(s,t,e=0){let i=s.aim.x-s.pos.x,n=s.aim.z-s.pos.z,r=Math.hypot(i,n),o=r>t?t/r:r<e&&r>.01?e/r:1;if(r<.01){let a=mn(s.aimYaw);return new C(s.pos.x+a.x*e,0,s.pos.z+a.z*e)}return new C(s.pos.x+i*o,0,s.pos.z+n*o)}function tc(s,t,e,i,n){return s.robots.filter(r=>s.isEnemy(t,r)&&r.alive&&Math.hypot(r.pos.x-e,r.pos.z-i)<n+r.radius)}function Uh(s,t,e,i){let n=[];for(let r of s.robots){if(!s.isEnemy(t,r)||!r.alive)continue;let o=r.pos.x-t.pos.x,a=r.pos.z-t.pos.z,l=Math.hypot(o,a);l>e+r.radius||Math.abs(Cn(t.aimYaw,Math.atan2(o,a)))>i+Math.atan2(r.radius,Math.max(l,.1))||s.map.lineOfSight(t.pos.x,t.pos.z,r.pos.x,r.pos.z,1.2)&&n.push(r)}return n}function Fh(s,t,e,i,n,r,o){let a=[];for(let l of s.robots){if(!s.isEnemy(t,l)||!l.alive)continue;let{d:c,t:h}=af(e,i,n,r,l.pos.x,l.pos.z);c<o+l.radius&&a.push({o:l,t:h})}return a.sort((l,c)=>l.t-c.t)}function Nh(s,t,e,i){let n=t.pos.x,r=t.pos.z;for(let o=1;o>=0;o-=.05){let a=n+(e-n)*o,l=r+(i-r)*o;if(s.map.isFree(a,l,t.radius))return{x:a,z:l}}return{x:n,z:r}}function xf(s,t){let e=t.def.primary,i=t.s,n=e.rate;i.fortressT>0&&(n/=1.6),i.berserkT>0&&(n*=.55),t.fireCd=n;let r=t.def.colors.glow,o=t.aimYaw;switch(e.kind){case"bolt":case"gatling":{let a=e.kind==="gatling"?t.muzzleIdx++:0,l=Ji(t,a),c=o+Ut(-e.spread,e.spread);s.proj.spawn({owner:t,kind:"bolt",x:l.x,y:l.y,z:l.z,dirX:Math.sin(c),dirZ:Math.cos(c),speed:e.speed,dmg:e.dmg,range:e.range,width:e.width,color:r,radius:.3}),s.fx.muzzle(l,r,e.kind==="gatling"?.7:1),t.model.recoil(a%2),e.kind==="gatling"?(t.model.gatSpin=40,s.sfx("gatling",t,{gap:.05})):s.sfx("laser",t);break}case"rail":{let a=Ji(t),l=mn(o),c=e.range,h=s.map.segmentHit(t.pos.x,t.pos.z,t.pos.x+l.x*c,t.pos.z+l.z*c,1.8);h>=0&&(c*=h);let d=Fh(s,t,a.x,a.z,t.pos.x+l.x*c,t.pos.z+l.z*c,.3),u=ec.set(t.pos.x+l.x*c,a.y,t.pos.z+l.z*c);if(d.length){let f=d[0].o;u=ec.set(f.pos.x,a.y,f.pos.z),s.damage(f,e.dmg,t,{dir:l})}s.fx.beam(a,u,r,.35,.35),s.fx.impact(u,r,1.5),s.fx.muzzle(a,r,1.6),t.model.recoil(0),s.sfx("rail",t),t.isPlayer&&s.fx.addShake(.15);break}case"blade":{let a=Uh(s,t,e.range*t.def.scale,e.arc);for(let c of a)s.damage(c,e.dmg,t,{dir:mn(o),knock:3});let l=t.muzzleIdx++%2?1:-1;for(let c=0;c<14;c++){let h=c/13,d=o+l*(h-.5)*2*e.arc;ee.set(t.pos.x+Math.sin(d)*3.2,1.8+(h-.5)*l*.6,t.pos.z+Math.cos(d)*3.2),s.fx.burst(ee,1,{color:16777215,color1:r,speed:1,life:.18,size:1.2,size1:.3})}t.model.recoil(l>0?0:1),s.sfx("blade",t);break}case"orb":{let a=Ji(t);s.proj.spawn({owner:t,kind:"orb",x:a.x,y:a.y,z:a.z,dirX:Math.sin(o),dirZ:Math.cos(o),speed:e.speed,dmg:e.dmg,aoeDmg:e.dmg,aoe:e.aoe,range:e.range,width:.35,color:r,radius:.45,explodeAtEnd:!0,opts:{small:!0}}),s.fx.muzzle(a,r,1.2),t.model.recoil(0),s.sfx("plasma",t);break}case"flame":{let a=Ji(t),l=mn(o);for(let c=0;c<6;c++){let h=o+Ut(-e.arc,e.arc)*.8,d=Ut(14,22);s.fx.add.spawn(a.x,a.y,a.z,Math.sin(h)*d,Ut(-.5,1.5),Math.cos(h)*d,Ut(.35,.5),.5,2.6,_f,yf,-2,1.5,1)}Math.random()<.5&&s.fx.trail(ee.set(a.x+l.x*6,a.y+1,a.z+l.z*6),4473924,1.2,.8,!0);for(let c of Uh(s,t,e.range,e.arc))s.damage(c,e.dmg,t,{burn:22,burnT:2,noNumber:!0,dir:l});s.sfx("flame",t,{gap:.13});break}}}var _f=new rt(1,.85,.4),yf=new rt(.8,.15,.02);function vf(s,t,e){let i=t.def.skills[e],n=bf[i.id];return n?n(s,t)!==!1:!1}function Mf(s,t){let e=bf[t.def.ult.id];if(!e)return!1;let i=e(s,t)!==!1;return i&&(s.sfx("ult",t),s.onUlt(t)),i}var bf={missiles(s,t){let e=Ro(t,45),i=null,n=14;for(let r of s.robots){if(!s.isEnemy(t,r)||!r.alive||r.isCloakedFrom(t))continue;let o=Math.hypot(r.pos.x-e.x,r.pos.z-e.z);o<n&&(n=o,i=r)}for(let r=0;r<6;r++)s.after(r*.07,()=>{if(!t.alive)return;let o=t.aimYaw+(r-2.5)*.28,a=t.pos.x-Math.sin(t.aimYaw+1.2)*.9*t.def.scale,l=t.pos.z-Math.cos(t.aimYaw+1.2)*.9*t.def.scale;s.proj.spawn({owner:t,kind:"missile",x:a,y:3.2*t.def.scale,z:l,dirX:Math.sin(o),dirZ:Math.cos(o),speed:30,turn:4.5,homing:i,homingPoint:e,dmg:0,aoe:2.4,aoeDmg:48,range:50,color:16752720,radius:.4,opts:{small:!0}}),s.sfx("missile",t,{gap:.05})})},shield(s,t){t.s.shield=350,t.s.shieldT=4,s.fx.ring(t.pos,1,4,t.def.colors.glow,.4),s.sfx("shield",t)},grenade(s,t){let e=Ro(t,26,3),i=Ji(t),n=Math.hypot(e.x-t.pos.x,e.z-t.pos.z);s.proj.lob({owner:t,kind:"grenade",from:i,to:e,dur:.4+n/45,height:3+n*.15,color:t.def.colors.glow,onLand:r=>s.explode(r,5.5,170,t,{slow:.55,slowT:2,color:t.def.colors.glow})}),t.model.recoil(0),s.sfx("plasma",t)},hyperbeam(s,t){let e=t.def.colors.glow,i=null,n=0,r=0;s.sfx("charge",t),t.channel={t:2,moveMul:.25,noFire:!0,noSkills:!0,turnRate:1.6,elapsed:0,update(o){this.elapsed+=o;let a=Ji(t);if(this.elapsed<.55){for(let u=0;u<3;u++)ee.set(a.x+Ut(-3,3),a.y+Ut(-2,2),a.z+Ut(-3,3)),s.fx.add.spawn(ee.x,ee.y,ee.z,(a.x-ee.x)*5,(a.y-ee.y)*5,(a.z-ee.z)*5,.2,.6,.2,new rt(e),new rt(1,1,1));return}i||(i=s.fx.persistentBeam(e,1.5));let l=mn(t.aimYaw),c=60,h=s.map.segmentHit(t.pos.x,t.pos.z,t.pos.x+l.x*c,t.pos.z+l.z*c,2);h>=0&&(c=Math.max(2,c*h));let d=ec.set(t.pos.x+l.x*c,a.y,t.pos.z+l.z*c);if(i.set(a,d,1.5),s.fx.burst(d,3,{color:16777215,color1:e,speed:10,life:.3,size:1.2,size1:.2}),Math.random()<.3&&s.fx.decal(d,1.2),s.fx.addShake(.02),n-=o,r-=o,r<=0&&(r=.3,s.sfx("beam",t,{gap:.1})),n<=0){n=.1;for(let{o:u}of Fh(s,t,t.pos.x,t.pos.z,d.x,d.z,1.6))s.damage(u,58,t,{dir:l,knock:2})}},end(){i&&i.release(),i=null}}},slam(s,t){t.forced={vx:0,vz:0,t:0,dur:.45,arc:2.6,onEnd:()=>{let e=t.def.colors.glow;s.fx.ring(t.pos,1,8,e,.5),s.fx.ring(t.pos,1,6,16777215,.35),s.fx.burst(ee.set(t.pos.x,.5,t.pos.z),30,{smoke:!0,color:6972764,color1:2762790,speed:12,life:1,size:2,size1:4,flat:!0,drag:3,alpha:.6}),s.fx.burst(ee.set(t.pos.x,.5,t.pos.z),20,{color:16765056,color1:e,speed:14,life:.4,size:.4,size1:.1,flat:!0,grav:5}),s.fx.decal(t.pos,5),s.fx.flash(t.pos,e,40,.3),s.shakeAt(t.pos,.6),s.sfx("slam",t);for(let i of tc(s,t,t.pos.x,t.pos.z,7)){let n=i.pos.x-t.pos.x,r=i.pos.z-t.pos.z,o=Math.hypot(n,r)||1;s.damage(i,150,t,{dir:{x:n/o,z:r/o},knock:22,slow:.6,slowT:1.5})}}}},fortress(s,t){t.s.fortressT=5,s.fx.ring(t.pos,1,5,t.def.colors.glow,.5),s.sfx("deploy",t)},rocket(s,t){let e=t.aimYaw,i=t.pos.x+Math.sin(e+1.3)*1.1*t.def.scale,n=t.pos.z+Math.cos(e+1.3)*1.1*t.def.scale;s.proj.spawn({owner:t,kind:"rocket",x:i,y:3.5*t.def.scale,z:n,dirX:Math.sin(e),dirZ:Math.cos(e),speed:32,dmg:0,aoe:6,aoeDmg:190,range:45,color:16752704,radius:.6,opts:{knock:10}}),s.fx.burst(ee.set(i,3.5*t.def.scale,n),12,{smoke:!0,color:8947848,color1:3355443,speed:4,life:.8,size:1.2,size1:2.5,alpha:.5}),s.sfx("missile",t)},artillery(s,t){let e=Ro(t,42),i=s.fx.telegraph(e,12,16724e3);s.sfx("zone",{pos:e},{vol:.6});for(let n=0;n<12;n++)s.after(.9+n*.17,()=>{let r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*11,a=e.x+Math.cos(r)*o,l=e.z+Math.sin(r)*o;s.proj.lob({owner:t,kind:"shell",from:{x:a-6,y:45,z:l-6},to:{x:a,z:l},dur:.45,height:0,color:16744496,onLand:c=>s.explode(c,4.5,120,t,{color:16744496,knock:8})})});s.after(.9+12*.17+.5,()=>i.release())},cloak(s,t){t.s.cloakT=4.5,s.fx.burst(ee.set(t.pos.x,1.8,t.pos.z),25,{color:t.def.colors.glow,color1:2228292,speed:6,life:.6,size:1,size1:.2,jitter:1.5}),s.sfx("cloak",t)},mine(s,t){let e=s.deployables.filter(i=>i.type==="mine"&&i.owner===t);e.length>=3&&s.removeDeployable(e[0]),s.addMine(t,t.pos.x,t.pos.z),s.sfx("deploy",t)},blink(s,t){let e=mn(t.aimYaw),i=Math.min(15,Math.max(4,Math.hypot(t.aim.x-t.pos.x,t.aim.z-t.pos.z))),n=Nh(s,t,t.pos.x+e.x*i,t.pos.z+e.z*i);if(Math.hypot(n.x-t.pos.x,n.z-t.pos.z)<1.5)return!1;let r=t.def.colors.glow;s.fx.burst(ee.set(t.pos.x,1.8,t.pos.z),24,{color:16777215,color1:r,speed:5,life:.4,size:.9,size1:.1,jitter:1.2}),s.fx.beam(ee.set(t.pos.x,1.8,t.pos.z),ec.set(n.x,1.8,n.z),r,.25,.3),t.pos.x=n.x,t.pos.z=n.z,s.fx.burst(ee.set(t.pos.x,1.8,t.pos.z),24,{color:16777215,color1:r,speed:7,life:.4,size:.9,size1:.1,jitter:1.2}),t.s.invulnT=Math.max(t.s.invulnT,.15),s.sfx("blink",t)},gauss(s,t){let e=t.def.colors.glow;s.sfx("charge",t),t.channel={t:.85,moveMul:.15,noFire:!0,noSkills:!0,turnRate:3,update(){let i=Ji(t);for(let n=0;n<3;n++)ee.set(i.x+Ut(-2,2),i.y+Ut(-1.5,1.5),i.z+Ut(-2,2)),s.fx.add.spawn(ee.x,ee.y,ee.z,(i.x-ee.x)*6,(i.y-ee.y)*6,(i.z-ee.z)*6,.16,.5,.2,new rt(e),new rt(1,1,1))},end(){if(!t.alive)return;let i=Ji(t),n=mn(t.aimYaw),r=new C(t.pos.x+n.x*95,i.y,t.pos.z+n.z*95);for(let{o}of Fh(s,t,t.pos.x,t.pos.z,r.x,r.z,1.5))s.damage(o,520,t,{dir:n,knock:14});s.fx.beam(i,r,e,1.6,.7),s.fx.beam(i,r,16777215,.5,.5,!1);for(let o=0;o<30;o++){let a=o/30;ee.set(i.x+(r.x-i.x)*a,i.y,i.z+(r.z-i.z)*a),s.fx.burst(ee,1,{color:16777215,color1:e,speed:3,life:.6,size:1.2,size1:.1})}s.fx.flash(i,e,60,.3,30),s.shakeAt(t.pos,.7),s.sfx("rail",t,{vol:1.5}),s.sfx("explosion",t,{size:1}),t.kvel.x-=n.x*12,t.kvel.z-=n.z*12}}},lunge(s,t){let e=mn(t.aimYaw),i=new Set,n=t.def.colors.glow;t.forced={vx:e.x*55,vz:e.z*55,t:0,dur:.26,onStep:()=>{s.fx.trail(ee.set(t.pos.x,1.8,t.pos.z),n,1.4,.3);for(let r of tc(s,t,t.pos.x,t.pos.z,2.2))i.has(r)||(i.add(r),s.damage(r,130,t,{dir:{x:-e.z,z:e.x},knock:8}),s.fx.impact(ee.set(r.pos.x,2,r.pos.z),n,2))}},s.sfx("boost",t),s.sfx("blade",t,{key:"l"})},cyclone(s,t){let e=0,i=t.def.colors.glow;t.channel={t:2.5,spin:!0,noFire:!0,moveMul:1,update(n){e-=n;for(let r=0;r<3;r++){let o=Math.random()*Math.PI*2;s.fx.add.spawn(t.pos.x+Math.cos(o)*4,1.8,t.pos.z+Math.sin(o)*4,-Math.sin(o)*12,0,Math.cos(o)*12,.15,1,.2,new rt(1,1,1),new rt(i))}if(e<=0){e=.25,s.sfx("blade",t,{gap:.2});for(let r of tc(s,t,t.pos.x,t.pos.z,5))s.damage(r,38,t,{knock:1.5,dir:{x:r.pos.x-t.pos.x,z:r.pos.z-t.pos.z}})}}}},grapple(s,t){let e=Ji(t),i=t.aimYaw;s.proj.spawn({owner:t,kind:"hook",x:e.x,y:e.y,z:e.z,dirX:Math.sin(i),dirZ:Math.cos(i),speed:62,dmg:60,range:21,color:t.def.colors.glow,radius:.5,onHit:(n,r)=>{if(!r){s.fx.impact(n.pos,t.def.colors.glow);return}let o=t.pos.x-r.pos.x,a=t.pos.z-r.pos.z,l=Math.hypot(o,a)||1,c=Math.max(0,l-3)*6;s.damage(r,60,t,{stun:.8}),r.kvel.set(o/l*c,0,a/l*c),s.fx.impact(n.pos,t.def.colors.glow,2),s.sfx("hook",r)}}),s.sfx("hook",t)},berserk(s,t){t.s.berserkT=7,t.heal(150),s.fx.ring(t.pos,1,6,16719904,.5),s.fx.burst(ee.set(t.pos.x,2,t.pos.z),40,{color:16744576,color1:16711680,speed:10,life:.6,size:1,size1:.2})},turret(s,t){let e=s.deployables.filter(r=>r.type==="turret"&&r.owner===t);e.length>=2&&s.removeDeployable(e[0]);let i=mn(t.aimYaw),n=Nh(s,t,t.pos.x+i.x*3,t.pos.z+i.z*3);s.addTurret(t,n.x,n.z),s.sfx("deploy",t)},repair(s,t){t.s.hotT=3,t.s.hotRate=120,s.fx.ring(t.pos,1,4,6356880,.5),s.sfx("heal",t)},emp(s,t){s.fx.ring(t.pos,1,10,6340863,.5),s.fx.sphere(ee.set(t.pos.x,1.5,t.pos.z),1,9,6340863,.4,.4),s.fx.burst(ee.set(t.pos.x,1.5,t.pos.z),40,{color:16777215,color1:6340863,speed:20,life:.4,size:.4,size1:.1,flat:!0}),s.fx.flash(t.pos,6340863,40,.3),s.sfx("emp",t);for(let i of tc(s,t,t.pos.x,t.pos.z,9))s.damage(i,90,t,{stun:1}),i.en=Math.max(0,i.en-50)},drones(s,t){for(let e=0;e<6;e++)s.addDrone(t,e/6*Math.PI*2)},napalm(s,t){let e=Ro(t,24,3),i=Ji(t),n=Math.hypot(e.x-t.pos.x,e.z-t.pos.z);s.proj.lob({owner:t,kind:"grenade",from:i,to:e,dur:.45+n/45,height:3+n*.15,color:16738832,onLand:r=>{s.explode(r,3,60,t,{color:16738832}),s.addFirePool(t,r.x,r.z,5,5)}}),s.sfx("plasma",t)},leap(s,t){let e=Ro(t,18,4),i=Nh(s,t,e.x,e.z),n=.6;t.forced={vx:(i.x-t.pos.x)/n,vz:(i.z-t.pos.z)/n,t:0,dur:n,arc:5,onStep:()=>s.fx.trail(ee.set(t.pos.x,1+t.airY,t.pos.z),16742944,1.2,.3),onEnd:()=>s.explode(t.pos,5.5,150,t,{color:16738832,knock:16,burn:20,burnT:2})},s.sfx("boost",t)},vent(s,t){let e=mn(t.aimYaw),i=Ji(t);for(let n=0;n<50*s.fx.pmul;n++){let r=t.aimYaw+Ut(-.6,.6),o=Ut(15,28);s.fx.add.spawn(i.x,i.y,i.z,Math.sin(r)*o,Ut(0,3),Math.cos(r)*o,Ut(.3,.45),1.2,3.5,_f,yf,-2,2.5,1)}s.fx.flash(i,16742944,40,.3);for(let n of Uh(s,t,9.5,.62))s.damage(n,110,t,{dir:e,knock:18,burn:25,burnT:3});t.kvel.x-=e.x*6,t.kvel.z-=e.z*6,s.sfx("small_boom",t),s.sfx("flame",t,{key:"v"})},meltdown(s,t){let e=s.fx.sphere(ee.set(t.pos.x,2,t.pos.z),1,1,16738832,99,.35);s.fx.items.splice(s.fx.items.findIndex(n=>n.m===e),1),s.sfx("charge",t),t.s.meltdown=!0;let i=0;t.channel={t:1.5,moveMul:.4,noFire:!0,noSkills:!0,update(n){i+=n,e.position.set(t.pos.x,2+t.airY,t.pos.z),e.scale.setScalar(1.5+i*3+Math.sin(i*40)*.2),e.material.opacity=.2+i*.2,Math.random()<.8&&s.fx.trail(ee.set(t.pos.x+Ut(-2,2),Ut(1,4),t.pos.z+Ut(-2,2)),16752704,1.2,.4)},end(){t.s.meltdown=!1,s.fx.release(e,"sphere"),t.alive&&(s.explode(t.pos,14,420,t,{color:16732176,knock:25,burn:30,burnT:3,big:!0}),s.fx.explosion(ee.set(t.pos.x,2,t.pos.z),10,16760896))}}}};var C_=1,yr=new C;function ic(){return{mx:0,mz:0,aimX:0,aimZ:1,fire:!1,skill:[!1,!1,!1],ult:!1,boost:!1}}var Co=class{constructor(t,e,i,n=!1){this.id=C_++,this.game=t,this.def=e,this.name=i,this.isPlayer=n,this.radius=e.radius,this.maxHp=e.hp,this.maxEn=e.energy,this.pos=new C,this.vel=new C,this.kvel=new C,this.aim=new C(0,0,1),this.aimYaw=0,this.moveYaw=0,this.model=new vs(e),t.scene.add(this.model.root);let r=new ot(new ai(1,20,14),new Qt({color:e.colors.glow,transparent:!0,opacity:.25,blending:Ge,depthWrite:!1}));r.visible=!1,t.scene.add(r),this.shieldMesh=r,this.stats={kills:0,deaths:0,assists:0,score:0,dmg:0,streak:0,bestStreak:0},this.damagers=new Map,this.lastKillTime=-99,this.multi=0,this.brain=null,this.team=null,this.alive=!1,this.respawnT=0,this.ultCharge=0,this.airY=0,this.seen=1,this.resetState()}resetState(){this.hp=this.maxHp,this.en=this.maxEn,this.cds=[0,0,0],this.fireCd=0,this.boostT=0,this.boostDir={x:0,z:1},this.enDelay=0,this.forced=null,this.channel=null,this.kvel.set(0,0,0),this.vel.set(0,0,0),this.muzzleIdx=0,this.s={shield:0,shieldT:0,stunT:0,slowT:0,slowMul:1,burnT:0,burnDps:0,burnSrc:null,burnTick:0,cloakT:0,ambushT:0,berserkT:0,fortressT:0,invulnT:0,hotT:0,hotRate:0,meltdown:!1},this.damagers.clear()}get ultReady(){return this.ultCharge>=100}isCloakedFrom(t){return this.s.cloakT<=0||!t||t===this?!1:this.pos.distanceTo(t.pos)>6}speedMul(){let t=this.s,e=1;return t.slowT>0&&(e*=t.slowMul),t.fortressT>0&&(e*=.5),t.berserkT>0&&(e*=1.4),t.cloakT>0&&(e*=1.3),this.channel&&this.channel.moveMul!==void 0&&(e*=this.channel.moveMul),e}get stunned(){return this.s.stunT>0}update(t,e){let i=this.game,n=this.s;if(!this.alive)return;for(let p=0;p<3;p++)this.cds[p]=Math.max(0,this.cds[p]-t);if(this.fireCd-=t,n.stunT=Math.max(0,n.stunT-t),n.slowT=Math.max(0,n.slowT-t),n.invulnT=Math.max(0,n.invulnT-t),n.ambushT=Math.max(0,n.ambushT-t),n.shieldT>0&&(n.shieldT-=t,n.shieldT<=0&&(n.shield=0)),n.cloakT>0&&(n.cloakT-=t,n.cloakT<=0&&this.breakCloak(!1)),n.berserkT>0&&(n.berserkT-=t,Math.random()<.5&&i.fx.trail(yr.set(this.pos.x+(Math.random()-.5)*2,1+Math.random()*2.5,this.pos.z+(Math.random()-.5)*2),16724016,.7,.35)),n.fortressT>0&&(n.fortressT-=t),n.hotT>0&&(n.hotT-=t,this.heal(n.hotRate*t),Math.random()<.4&&i.fx.trail(yr.set(this.pos.x+(Math.random()-.5)*2,.5+Math.random()*2,this.pos.z+(Math.random()-.5)*2),6356880,.6,.6)),n.burnT>0&&(n.burnT-=t,n.burnTick-=t,n.burnTick<=0&&(n.burnTick=.25,i.damage(this,n.burnDps*.25,n.burnSrc,{noNumber:!1,burnTick:!0})),Math.random()<.6&&i.fx.trail(yr.set(this.pos.x+(Math.random()-.5)*1.5,1+Math.random()*2,this.pos.z+(Math.random()-.5)*1.5),16742944,.8,.35)),!this.alive)return;if(n.stunT>0&&Math.random()<.3&&i.fx.trail(yr.set(this.pos.x+(Math.random()-.5)*2,3+Math.random(),this.pos.z+(Math.random()-.5)*2),8438015,.5,.3),this.enDelay>0?this.enDelay-=t:this.en=Math.min(this.maxEn,this.en+zi.regen*t),this.ultCharge=Math.min(100,this.ultCharge+nf*t),this.channel){let p=this.channel;p.t-=t,p.update&&p.update(t),p.t<=0&&this.channel===p&&(this.channel=null,p.end&&p.end())}let r=e.aimX-this.pos.x,o=e.aimZ-this.pos.z;this.aim.set(e.aimX,0,e.aimZ);let a=n.stunT<=0&&!this.forced;if(r*r+o*o>.25&&n.stunT<=0&&!(this.channel&&this.channel.lockAim)){let p=Math.atan2(r,o);this.aimYaw=this.channel&&this.channel.turnRate?wo(this.aimYaw,p,this.channel.turnRate*t):p}let l=e.mx,c=e.mz,h=Math.hypot(l,c);h>1&&(l/=h,c/=h);let d=this.def.speed*this.speedMul(),u=0,f=0,g=0;if(this.forced){let p=this.forced;p.t+=t;let v=Math.min(1,p.t/p.dur);u=p.vx,f=p.vz,p.arc&&(g=Math.sin(v*Math.PI)*p.arc),p.onStep&&p.onStep(t),v>=1&&(this.forced=null,p.onEnd&&p.onEnd())}else n.stunT<=0&&(e.boost&&this.boostT<=0&&this.en>=zi.cost&&(this.en-=zi.cost,this.enDelay=zi.regenDelay,this.boostT=zi.time,h>.1?this.boostDir={x:l,z:c}:this.boostDir={x:Math.sin(this.aimYaw),z:Math.cos(this.aimYaw)},i.fx.burst(yr.set(this.pos.x,1.2,this.pos.z),14,{color:this.def.colors.glow,color1:3364215,speed:7,life:.35,size:1,size1:.2,flat:!0}),i.sfx("boost",this)),this.boostT>0?(this.boostT-=t,u=this.boostDir.x*this.def.speed*zi.mult,f=this.boostDir.z*this.def.speed*zi.mult,Math.random()<.8&&i.fx.trail(yr.set(this.pos.x-this.boostDir.x,1.4*this.def.scale,this.pos.z-this.boostDir.z),this.def.colors.glow,.9,.3)):(u=l*d,f=c*d));u+=this.kvel.x,f+=this.kvel.z;let x=Math.exp(-6*t);if(this.kvel.multiplyScalar(x),this.vel.set(u,0,f),this.pos.x+=u*t,this.pos.z+=f*t,i.map.resolveCircle(this.pos,this.radius),a){let p=this.channel&&this.channel.noFire;if(e.fire&&this.fireCd<=0&&!p&&(xf(i,this),n.cloakT>0&&this.breakCloak(!0)),!(this.channel&&this.channel.noSkills)){for(let v=0;v<3;v++)e.skill[v]&&this.cds[v]<=0&&vf(i,this,v)&&(this.cds[v]=this.def.skills[v].cd,n.cloakT>0&&this.def.skills[v].id!=="cloak"&&this.breakCloak(!0));e.ult&&this.ultCharge>=100&&Mf(i,this)&&(this.ultCharge=0,n.cloakT>0&&this.breakCloak(!0))}}let m=Math.hypot(u,f)>.5;m&&(this.moveYaw=Math.atan2(u,f)),this.model.root.position.set(this.pos.x,0,this.pos.z),this.model.inner.position.y=g,this.model.update(t,{speedNorm:Math.hypot(u,f)/this.def.speed,moving:m,moveYaw:this.moveYaw,aimYaw:this.aimYaw,boost:this.boostT>0||this.forced&&!this.forced.arc,spin:this.channel&&this.channel.spin,airborne:g>.3,stunned:n.stunT>0}),this.airY=g,n.shield>0?(this.shieldMesh.visible=!0,this.shieldMesh.position.set(this.pos.x,1.8*this.def.scale+g,this.pos.z),this.shieldMesh.scale.setScalar(2.4*this.def.scale*(1+Math.sin(i.time*12)*.02)),this.shieldMesh.material.opacity=.18+.1*(n.shield/350)):this.shieldMesh.visible=!1}heal(t){this.hp=Math.min(this.maxHp,this.hp+t)}setTeam(t){this.team=t;let e=t==="blue"?4033535:16728128,i=new wn(this.radius*1.15,this.radius*1.45,40);i.rotateX(-Math.PI/2);let n=new ot(i,new Qt({color:e,transparent:!0,opacity:.85,depthWrite:!1}));n.position.y=.09,n.renderOrder=2,this.model.root.add(n),this.teamRing=n}breakCloak(t){this.s.cloakT>0&&(this.s.cloakT=0),t&&(this.s.ambushT=.4)}updateVisibility(t,e=1){let i=1;this.s.cloakT>0?t===this?i=.3:!t||this.isCloakedFrom(t)?i=.06:i=.35:this.s.invulnT>0&&(i=.55+Math.sin(this.game.time*30)*.2),i=Math.min(i,e);let n=e>.03;this.model.root.visible=n,n||(this.shieldMesh.visible=!1),n&&this.model.setOpacity(i)}setVisible(t){this.model.root.visible=t,t||(this.shieldMesh.visible=!1)}destroy(){this.game.scene.remove(this.model.root),this.game.scene.remove(this.shieldMesh),this.model.dispose(),this.shieldMesh.geometry.dispose(),this.shieldMesh.material.dispose()}};var Po=class{constructor(t,e,i){this.r=t,this.game=e,this.diff=ns[i]||ns.normal,this.ctl=ic(),this.thinkT=Math.random()*.3,this.target=null,this.targetSince=0,this.lastSeen={x:0,z:0,t:-99},this.path=null,this.pathGoal=null,this.pathT=0,this.goal=null,this.mode="wander",this.strafe=Math.random()<.5?1:-1,this.strafeT=0,this.aimX=t.pos.x,this.aimZ=t.pos.z+5,this.errA=0,this.errT=0,this.lastHurtT=-99,this.lastAttacker=null,this.stuckT=0,this.stuckX=0,this.stuckZ=0,this.unstuckT=0,this.unstuckDir={x:0,z:0},this.skillT=Ut(.5,1.5),this.wanderPt=null,this.aggression=Ut(.7,1.3)}onDamaged(t){this.lastHurtT=this.game.time,t&&t!==this.r&&t.alive&&(this.lastAttacker=t)}reset(){this.target=null,this.path=null,this.goal=null,this.wanderPt=null,this.aimX=this.r.pos.x,this.aimZ=this.r.pos.z+5}canSee(t){let e=this.r;if(!t.alive||!this.game.isEnemy(e,t)||t.isCloakedFrom(e))return!1;let i=Math.hypot(t.pos.x-e.pos.x,t.pos.z-e.pos.z);return i>48?!1:i<12?!0:this.game.map.lineOfSight(e.pos.x,e.pos.z,t.pos.x,t.pos.z,1.8)}think(){let t=this.game,e=this.r,i=null,n=1/0;for(let u of t.robots){if(u===e||!this.canSee(u))continue;let f=Math.hypot(u.pos.x-e.pos.x,u.pos.z-e.pos.z),g=f+u.hp/u.maxHp*12;u===this.lastAttacker&&t.time-this.lastHurtT<3&&(g-=14),u===this.target&&(g-=8),u.s.invulnT>0&&(g+=25),u.isPlayer&&(g-=3),!(t.mode==="team"&&f>30&&!(u===this.lastAttacker&&t.time-this.lastHurtT<3))&&g<n&&(n=g,i=u)}i!==this.target&&(this.target=i,this.targetSince=t.time),i&&(this.lastSeen.x=i.pos.x,this.lastSeen.z=i.pos.z,this.lastSeen.t=t.time);let r=t.zone,o=e.hp/e.maxHp,a=Math.hypot(e.pos.x-r.cx,e.pos.z-r.cz),l=r.next,c=a>r.r-3,h=l&&r.state==="shrink"&&Math.hypot(e.pos.x-l.cx,e.pos.z-l.cz)>l.r-2,d=r.state==="wait"&&r.t<10&&l&&Math.hypot(e.pos.x-l.cx,e.pos.z-l.cz)>l.r-2;if(this.mode="wander",c||h||d){let u=l&&(h||d)?l:r;if(this.mode="zone",!this.goal||this.goalMode!=="zone"){let f=t.map.randomFreePoint(u.cx,u.cz,Math.max(4,u.r*.5));this.goal=f}}else if(o<.33&&e.s.berserkT<=0){let u=this.nearestPickup("repair",55);if(u)this.mode="heal",this.goal={x:u.x,z:u.z};else if(this.target){this.mode="flee";let f=e.pos.x-this.target.pos.x,g=e.pos.z-this.target.pos.z,x=Math.hypot(f,g)||1;this.goal={x:fe(e.pos.x+f/x*14,-110,110),z:fe(e.pos.z+g/x*14,-110,110)}}}if(this.mode==="wander")if(this.target)this.mode="fight";else if(t.conquest){let u=o<.6&&this.nearestPickup("repair",30);u?(this.mode="pickup",this.goal={x:u.x,z:u.z}):(this.mode="objective",this.goal=this.objectiveGoal())}else if(t.time-this.lastSeen.t<3)this.mode="hunt",this.goal={x:this.lastSeen.x,z:this.lastSeen.z};else{let u=o<.75&&this.nearestPickup("repair",45)||e.ultCharge<70&&this.nearestPickup("core",35);u?(this.mode="pickup",this.goal={x:u.x,z:u.z}):((!this.wanderPt||Math.hypot(this.wanderPt.x-e.pos.x,this.wanderPt.z-e.pos.z)<4||Math.random()<.02)&&(this.wanderPt=t.map.randomFreePoint(r.cx,r.cz,Math.min(r.r*.7,100))),this.goal=this.wanderPt)}this.goalMode=this.mode}objectiveGoal(){let t=this.game,e=this.r,i=t.conquest;this.objT=(this.objT||0)-1;let n=this.objPoint,r=n&&n.owner===e.team&&Math.abs(n.v)>=100&&!n.contested;if(!n||r||this.objT<=0){this.objBias===void 0&&(this.objBias=Math.random()*30);let a=null,l=1/0;for(let c of i.points){let h=Math.hypot(c.x-e.pos.x,c.z-e.pos.z),d=e.team==="blue"?c.nr:c.nb,u=h+Math.random()*25+this.objBias*(c.id.charCodeAt(0)%3===0?1:-.3);c.owner===e.team&&Math.abs(c.v)>=100&&!d&&(u+=90),c.owner===e.team&&d&&(u-=45),c.contested&&(u-=15),u<l&&(l=u,a=c)}this.objPoint=a,this.objT=8+Math.floor(Math.random()*6),this.objSpot=null}let o=this.objPoint;return(!this.objSpot||Math.hypot(this.objSpot.x-e.pos.x,this.objSpot.z-e.pos.z)<2||Math.random()<.08)&&(this.objSpot=t.map.randomFreePoint(o.x,o.z,o.r*.7)),this.objSpot}nearestPickup(t,e){let i=null,n=e;for(let r of this.game.pickups){if(!r.active||r.type!==t)continue;let o=Math.hypot(r.x-this.r.pos.x,r.z-this.r.pos.z);o<n&&(n=o,i=r)}return i}steerTo(t,e,i){let n=this.r,r=this.game.map,o=t-n.pos.x,a=e-n.pos.z,l=Math.hypot(o,a);if(l<.8)return{x:0,z:0};if(r.navLine(n.pos.x,n.pos.z,t,e))return this.path=null,{x:o/l,z:a/l};for(this.pathT-=i,(!this.path||this.pathT<=0||!this.pathGoal||Math.hypot(this.pathGoal.x-t,this.pathGoal.z-e)>5)&&(this.path=r.findPath(n.pos.x,n.pos.z,t,e),this.pathGoal={x:t,z:e},this.pathT=Ut(1,1.8));this.path.length>1&&Math.hypot(this.path[0].x-n.pos.x,this.path[0].z-n.pos.z)<1.6;)this.path.shift();let c=this.path[0];if(!c)return{x:o/l,z:a/l};let h=c.x-n.pos.x,d=c.z-n.pos.z,u=Math.hypot(h,d)||1;return{x:h/u,z:d/u}}update(t){let e=this.game,i=this.r,n=this.ctl,r=this.diff;if(n.fire=!1,n.skill[0]=n.skill[1]=n.skill[2]=!1,n.ult=!1,n.boost=!1,!i.alive)return n;this.thinkT-=t,this.thinkT<=0&&(this.thinkT=r.think*Ut(.8,1.2),this.think());let o=this.target&&this.target.alive&&!this.target.isCloakedFrom(i)?this.target:null;o||(this.target=null);let a=i.hp/i.maxHp,l={x:0,z:0},c=999,h=!1;if(o&&(c=Math.hypot(o.pos.x-i.pos.x,o.pos.z-i.pos.z),h=e.map.lineOfSight(i.pos.x,i.pos.z,o.pos.x,o.pos.z,1.8)),this.mode==="fight"&&o){let x=i.def.ai.range*(this.aggression>1.1?.8:1),m=o.pos.x-i.pos.x,p=o.pos.z-i.pos.z,v=c||1,T=m/v,M=p/v;this.strafeT-=t,this.strafeT<=0&&(this.strafeT=Ut(.8,2.2),Math.random()<.6&&(this.strafe*=-1)),h?c>x+3?(l=this.steerTo(o.pos.x,o.pos.z,t),l.x+=-M*this.strafe*.35,l.z+=T*this.strafe*.35):c<x-3&&x>5?l={x:-T+-M*this.strafe*.6,z:-M+T*this.strafe*.6}:(l={x:-M*this.strafe,z:T*this.strafe},x<=5&&(l.x+=T*.8,l.z+=M*.8)):l=this.steerTo(o.pos.x,o.pos.z,t);let w=e.zone,S=i.pos.x+l.x*3,R=i.pos.z+l.z*3;if(Math.hypot(S-w.cx,R-w.cz)>w.r-4){let y=w.cx-i.pos.x,E=w.cz-i.pos.z,P=Math.hypot(y,E)||1;l.x+=y/P,l.z+=E/P}}else this.goal&&(l=this.steerTo(this.goal.x,this.goal.z,t));if(this.stuckT+=t,this.stuckT>.8){if(Math.hypot(i.pos.x-this.stuckX,i.pos.z-this.stuckZ)<1&&Math.hypot(l.x,l.z)>.3&&!i.channel&&!i.stunned){this.unstuckT=Ut(.4,.9);let m=Math.random()*Math.PI*2;this.unstuckDir={x:Math.cos(m),z:Math.sin(m)},this.path=null,this.wanderPt=null}this.stuckT=0,this.stuckX=i.pos.x,this.stuckZ=i.pos.z}this.unstuckT>0&&(this.unstuckT-=t,l=this.unstuckDir);for(let x of e.robots){if(x===i||!x.alive)continue;let m=i.pos.x-x.pos.x,p=i.pos.z-x.pos.z,v=Math.hypot(m,p);v<3.5&&v>.01&&(l.x+=m/v*(3.5-v)*.3,l.z+=p/v*(3.5-v)*.3)}let d=Math.hypot(l.x,l.z);n.mx=d>.01?l.x/Math.max(1,d):0,n.mz=d>.01?l.z/Math.max(1,d):0;let u,f;if(o){let m=i.def.primary.speed||200,p=c/m*r.lead;this.errT-=t,this.errT<=0&&(this.errT=Ut(.3,.7),this.errA=Ut(-1,1)*r.aimErr);let v=o.pos.x+o.vel.x*p,T=o.pos.z+o.vel.z*p,M=Math.atan2(v-i.pos.x,T-i.pos.z)+this.errA,w=Math.hypot(v-i.pos.x,T-i.pos.z);u=i.pos.x+Math.sin(M)*w,f=i.pos.z+Math.cos(M)*w}else{let x=Math.hypot(n.mx,n.mz);u=i.pos.x+(x>.1?n.mx:Math.sin(i.aimYaw))*10,f=i.pos.z+(x>.1?n.mz:Math.cos(i.aimYaw))*10}let g=Math.min(1,t*r.aimSpeed);if(this.aimX+=(u-this.aimX)*g,this.aimZ+=(f-this.aimZ)*g,n.aimX=this.aimX,n.aimZ=this.aimZ,o&&h&&e.time-this.targetSince>r.reaction){let x=i.def.primary,m=(x.range||10)*(x.kind==="blade"?i.def.scale:1)*.95,p=Math.atan2(this.aimX-i.pos.x,this.aimZ-i.pos.z),v=Math.atan2(o.pos.x-i.pos.x,o.pos.z-i.pos.z),T=Math.abs(p-v);T>Math.PI&&(T=Math.PI*2-T),c<m+o.radius&&T<(x.kind==="rail"?.12:.35)&&(n.fire=!0)}if(this.skillT-=t,this.skillT<=0&&!i.channel){this.skillT=Ut(.3,.6);let x={t:o,d:c,los:h,hp:a,hurt:e.time-this.lastHurtT<1.2,near:p=>e.robots.filter(v=>e.isEnemy(i,v)&&v.alive&&!v.isCloakedFrom(i)&&Math.hypot(v.pos.x-i.pos.x,v.pos.z-i.pos.z)<p).length},m=p=>{let v=P_[p];if(!v)return!1;let T=v(x,i);if(!T||Math.random()>r.skillChance)return!1;if(T.away&&o){let M=i.pos.x-o.pos.x,w=i.pos.z-o.pos.z,S=Math.hypot(M,w)||1;n.aimX=i.pos.x+M/S*15,n.aimZ=i.pos.z+w/S*15,this.aimX=n.aimX,this.aimZ=n.aimZ}else o&&T!=="free"&&(n.aimX=o.pos.x+o.vel.x*.3,n.aimZ=o.pos.z+o.vel.z*.3);return!0};if(i.ultCharge>=100&&m(i.def.ult.id))n.ult=!0;else for(let p=0;p<3;p++)if(!(i.cds[p]>0)&&m(i.def.skills[p].id)){n.skill[p]=!0;break}}if(i.en>45&&!i.channel)if(e.time-this.lastHurtT<.6&&Math.random()<r.dodge*t*4){if(n.boost=!0,o){let m=(o.pos.x-i.pos.x)/(c||1),p=(o.pos.z-i.pos.z)/(c||1),v=Math.random()<.5?1:-1;n.mx=-p*v,n.mz=m*v}}else((this.mode==="zone"||this.mode==="flee")&&Math.random()<t*1.5||o&&this.mode==="fight"&&c>i.def.ai.range+10&&Math.random()<t*.8)&&(n.boost=!0);return n}},P_={missiles:s=>s.t&&s.d<32&&s.los,shield:s=>s.hurt&&s.hp<.85&&"free",grenade:s=>s.t&&s.d<25&&s.d>4,hyperbeam:s=>s.t&&s.d<38&&s.los,slam:s=>s.near(6.5)>=1&&"free",fortress:s=>s.t&&s.d<26&&s.los&&"free",rocket:s=>s.t&&s.d<35&&s.los,artillery:s=>s.t&&s.d<38,cloak:s=>(s.hp<.4&&s.hurt||s.t&&s.d>30&&Math.random()<.15)&&"free",mine:s=>(s.t&&s.d<9||s.hp<.5&&s.hurt)&&"free",blink:s=>s.t&&s.hp<.4&&s.d<14?{away:!0}:!1,gauss:s=>s.t&&s.d<65,lunge:s=>s.t&&s.d>4&&s.d<14&&s.los,cyclone:s=>s.near(5)>=1&&"free",grapple:s=>s.t&&s.d>6&&s.d<19&&s.los,berserk:s=>s.t&&s.d<14,turret:s=>s.t&&s.d<24,repair:s=>s.hp<.55&&"free",emp:s=>s.near(8.5)>=1,drones:s=>s.t&&s.d<25,napalm:s=>s.t&&s.d<23&&s.d>3,leap:s=>s.t&&s.hp<.3&&s.hurt?{away:!0}:s.t&&s.d>7&&s.d<18,vent:s=>s.t&&s.d<8.5&&s.los,meltdown:s=>s.near(11)>=1&&(s.near(11)>=2||s.t&&s.t.hp<500||s.hp<.4)};var Sf="steelroyale.settings.v1",Io={graphics:{quality:"high",shadows:!0,bloom:!0,resolution:1,particles:1,softVision:!0},audio:{master:.8,music:.45,sfx:.8},gameplay:{shake:!0,damageNumbers:!0,nameplates:!0,camZoom:1,trueSight:!0,visDark:.9},keys:{up:"KeyW",down:"KeyS",left:"KeyA",right:"KeyD",skill1:"Digit1",skill2:"Digit2",skill3:"Digit3",ult:"Digit4",boost:"Space",scoreboard:"Tab"},touch:{mode:"auto",scale:1,opacity:.85},player:{name:"STEEL_WOLF",classId:"vanguard",bots:9,difficulty:"normal",duration:300,mode:"br"}},wf={up:"\u524D\u9032",down:"\u5F8C\u9000",left:"\u5DE6\u79FB\u52D5",right:"\u53F3\u79FB\u52D5",skill1:"\u30B9\u30AD\u30EB1",skill2:"\u30B9\u30AD\u30EB2",skill3:"\u30B9\u30AD\u30EB3",ult:"\u30A6\u30EB\u30C8",boost:"\u30D6\u30FC\u30B9\u30C8",scoreboard:"\u30B9\u30B3\u30A2\u30DC\u30FC\u30C9"};function nc(s,t){let e=Array.isArray(s)?[...s]:{...s};if(!t||typeof t!="object")return e;for(let i of Object.keys(s))t[i]!==void 0&&(s[i]&&typeof s[i]=="object"&&!Array.isArray(s[i])?e[i]=nc(s[i],t[i]):typeof t[i]==typeof s[i]&&(e[i]=t[i]));return e}function I_(){try{let t=localStorage.getItem(Sf);if(t)return nc(Io,JSON.parse(t))}catch{}let s=nc(Io,{});return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches&&Object.assign(s.graphics,{quality:"low",shadows:!1,bloom:!1,resolution:.75,particles:.5}),s}var xt=I_();function ci(){try{localStorage.setItem(Sf,JSON.stringify(xt))}catch{}}function Tf(s){let t=nc(Io,{});if(s)Object.assign(xt[s],t[s]);else for(let e of Object.keys(t))e!=="player"&&Object.assign(xt[e],t[e]);ci()}function Ki(s){return s?s.startsWith("Key")?s.slice(3):s.startsWith("Digit")?s.slice(5):s.startsWith("Numpad")?"Num"+s.slice(6):{Space:"SPACE",ShiftLeft:"L-SHIFT",ShiftRight:"R-SHIFT",ControlLeft:"L-CTRL",ControlRight:"R-CTRL",AltLeft:"L-ALT",AltRight:"R-ALT",Tab:"TAB",ArrowUp:"\u2191",ArrowDown:"\u2193",ArrowLeft:"\u2190",ArrowRight:"\u2192",Backquote:"`",CapsLock:"CAPS",Enter:"ENTER"}[s]||s:"-"}var L_=`
attribute float aSize;
attribute float aAlpha;
attribute vec3 aColor;
varying float vAlpha;
varying vec3 vColor;
uniform float uScale;
void main() {
  vAlpha = aAlpha;
  vColor = aColor;
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uScale / -mv.z;
  gl_Position = projectionMatrix * mv;
}`,D_=`
varying float vAlpha;
varying vec3 vColor;
uniform float uSoft;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c) * 2.0;
  float a = smoothstep(1.0, uSoft, d) * vAlpha;
  if (a < 0.01) discard;
  gl_FragColor = vec4(vColor, a);
}`,sc=class{constructor(t,e){this.max=t,this.count=0,this.pos=new Float32Array(t*3),this.vel=new Float32Array(t*3),this.col0=new Float32Array(t*3),this.col1=new Float32Array(t*3),this.life=new Float32Array(t),this.maxLife=new Float32Array(t),this.size0=new Float32Array(t),this.size1=new Float32Array(t),this.grav=new Float32Array(t),this.drag=new Float32Array(t),this.alpha0=new Float32Array(t);let i=new _e;this.aPos=new Le(new Float32Array(t*3),3).setUsage(ts),this.aCol=new Le(new Float32Array(t*3),3).setUsage(ts),this.aSize=new Le(new Float32Array(t),1).setUsage(ts),this.aAlpha=new Le(new Float32Array(t),1).setUsage(ts),i.setAttribute("position",this.aPos),i.setAttribute("aColor",this.aCol),i.setAttribute("aSize",this.aSize),i.setAttribute("aAlpha",this.aAlpha),i.setDrawRange(0,0),this.mat=new De({vertexShader:L_,fragmentShader:D_,uniforms:{uScale:{value:600},uSoft:{value:e?0:.3}},transparent:!0,depthWrite:!1,blending:e?Ge:Zn}),this.points=new Xr(i,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=e?3:2}spawn(t,e,i,n,r,o,a,l,c,h,d,u=0,f=0,g=1){if(this.count>=this.max)return;let x=this.count++,m=x*3;this.pos[m]=t,this.pos[m+1]=e,this.pos[m+2]=i,this.vel[m]=n,this.vel[m+1]=r,this.vel[m+2]=o,this.col0[m]=h.r,this.col0[m+1]=h.g,this.col0[m+2]=h.b,this.col1[m]=d.r,this.col1[m+1]=d.g,this.col1[m+2]=d.b,this.life[x]=a,this.maxLife[x]=a,this.size0[x]=l,this.size1[x]=c,this.grav[x]=u,this.drag[x]=f,this.alpha0[x]=g}update(t){let e=this.aPos.array,i=this.aCol.array,n=this.aSize.array,r=this.aAlpha.array,o=0;for(;o<this.count;){if(this.life[o]-=t,this.life[o]<=0){let h=--this.count;o!==h&&this.copy(h,o);continue}let a=o*3,l=Math.max(0,1-this.drag[o]*t);this.vel[a]*=l,this.vel[a+1]=this.vel[a+1]*l-this.grav[o]*t,this.vel[a+2]*=l,this.pos[a]+=this.vel[a]*t,this.pos[a+1]+=this.vel[a+1]*t,this.pos[a+2]+=this.vel[a+2]*t,this.pos[a+1]<.05&&(this.pos[a+1]=.05,this.vel[a+1]*=-.3);let c=1-this.life[o]/this.maxLife[o];e[a]=this.pos[a],e[a+1]=this.pos[a+1],e[a+2]=this.pos[a+2],i[a]=this.col0[a]+(this.col1[a]-this.col0[a])*c,i[a+1]=this.col0[a+1]+(this.col1[a+1]-this.col0[a+1])*c,i[a+2]=this.col0[a+2]+(this.col1[a+2]-this.col0[a+2])*c,n[o]=this.size0[o]+(this.size1[o]-this.size0[o])*c,r[o]=this.alpha0[o]*(c<.1?c*10:1-(c-.1)/.9),o++}this.points.geometry.setDrawRange(0,this.count),this.aPos.needsUpdate=this.aCol.needsUpdate=this.aSize.needsUpdate=this.aAlpha.needsUpdate=!0}copy(t,e){let i=t*3,n=e*3;for(let r=0;r<3;r++)this.pos[n+r]=this.pos[i+r],this.vel[n+r]=this.vel[i+r],this.col0[n+r]=this.col0[i+r],this.col1[n+r]=this.col1[i+r];this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.size0[e]=this.size0[t],this.size1[e]=this.size1[t],this.grav[e]=this.grav[t],this.drag[e]=this.drag[t],this.alpha0[e]=this.alpha0[t]}clear(){this.count=0,this.points.geometry.setDrawRange(0,0)}},Lo=new rt,vr=new rt,xS=new rt(1,1,1),N_=new C,_S=new Ii,yS=new C(0,1,0),rc=class{constructor(t){this.scene=t,this.add=new sc(6e3,!0),this.smoke=new sc(2500,!1),t.add(this.add.points,this.smoke.points),this.shake=0,this.items=[],this.dmgNumbers=[],this.beamGeo=new ke(1,1,1,10,1,!0),this.beamGeo.rotateX(Math.PI/2),this.beamGeo.translate(0,0,.5),this.sphereGeo=new ai(1,20,14),this.ringGeo=new Di(2,2),this.ringGeo.rotateX(-Math.PI/2),this.ringTex=uf(),this.scorchTex=hf(),this.pool={beam:[],sphere:[],ring:[],decal:[]},this.lights=[];for(let e=0;e<6;e++){let i=new Tn(16755285,0,20,1.6);i.position.set(0,-100,0),t.add(i),this.lights.push({l:i,t:0,dur:1,peak:0})}this.lightIdx=0,this.debrisGeo=new Fe(1,1,1),this.debris=[]}get pmul(){return xt.graphics.particles}setScale(t,e){let i=t/(2*Math.tan(e*Math.PI/360));this.add.mat.uniforms.uScale.value=i,this.smoke.mat.uniforms.uScale.value=i}burst(t,e,i){e=Math.max(1,Math.round(e*this.pmul)),Lo.set(i.color??16777215),vr.set(i.color1??i.color??16777215);let n=i.smoke?this.smoke:this.add,r=i.speed??8;for(let o=0;o<e;o++){let a=Math.random()*2-1,l=Math.random()*2-1,c=Math.random()*2-1;i.dir&&(a=i.dir.x+a*(i.spread??.3),l=i.dir.y+l*(i.spread??.3),c=i.dir.z+c*(i.spread??.3)),i.flat&&(l=Math.abs(l)*.2),i.up&&(l=Math.abs(l)+i.up);let h=Math.hypot(a,l,c)||1,d=r*(.4+Math.random()*.6);n.spawn(t.x+(Math.random()-.5)*(i.jitter??0),t.y+(Math.random()-.5)*(i.jitter??0),t.z+(Math.random()-.5)*(i.jitter??0),a/h*d,l/h*d,c/h*d,(i.life??.5)*(.6+Math.random()*.6),i.size??.5,i.size1??.1,Lo,vr,i.grav??0,i.drag??2,i.alpha??1)}}trail(t,e,i=.5,n=.25,r=!1){Math.random()>this.pmul||(Lo.set(e),r?(vr.set(2236962),this.smoke.spawn(t.x,t.y,t.z,Ut(-.5,.5),Ut(.5,1.5),Ut(-.5,.5),n,i,i*3,Lo,vr,0,1,.5)):(vr.set(e).multiplyScalar(.3),this.add.spawn(t.x,t.y,t.z,Ut(-.3,.3),Ut(-.3,.3),Ut(-.3,.3),n,i,i*.2,Lo,vr,0,2)))}getMesh(t,e){let i=this.pool[t],n=i.length?i.pop():e();return n.visible=!0,this.scene.add(n),n}beam(t,e,i,n=.2,r=.15,o=!0){let a=()=>new ot(this.beamGeo,new Qt({transparent:!0,blending:Ge,depthWrite:!1})),l=t.distanceTo(e),c=this.getMesh("beam",a);if(c.material.color.set(i),c.material.opacity=.9,c.position.copy(t),c.lookAt(e),c.scale.set(n,n,l),this.items.push({m:c,type:"beam",t:0,dur:r,w:n,fade:"beam"}),o){let h=this.getMesh("beam",a);h.material.color.set(16777215),h.material.opacity=1,h.position.copy(t),h.lookAt(e),h.scale.set(n*.35,n*.35,l),this.items.push({m:h,type:"beam",t:0,dur:r,w:n*.35,fade:"beam"})}return c}persistentBeam(t,e){let i=()=>new ot(this.beamGeo,new Qt({transparent:!0,blending:Ge,depthWrite:!1})),n=this.getMesh("beam",i);n.material.color.set(t),n.material.opacity=.85;let r=this.getMesh("beam",i);return r.material.color.set(16777215),r.material.opacity=1,{set(o,a,l=e){let c=o.distanceTo(a);for(let[h,d]of[[n,1],[r,.35]])h.position.copy(o),h.lookAt(a),h.scale.set(l*d*(.9+Math.random()*.2),l*d*(.9+Math.random()*.2),c)},release:()=>{this.release(n,"beam"),this.release(r,"beam")}}}sphere(t,e,i,n,r,o=.8){let a=this.getMesh("sphere",()=>new ot(this.sphereGeo,new Qt({transparent:!0,blending:Ge,depthWrite:!1})));return a.material.color.set(n),a.material.opacity=o,a.position.copy(t),a.scale.setScalar(e),this.items.push({m:a,type:"sphere",t:0,dur:r,r0:e,r1:i,op:o,fade:"grow"}),a}ring(t,e,i,n,r,o=1){let a=this.getMesh("ring",()=>new ot(this.ringGeo,new Qt({map:this.ringTex,transparent:!0,blending:Ge,depthWrite:!1})));return a.material.color.set(n),a.material.opacity=o,a.position.set(t.x,.15,t.z),a.scale.setScalar(e),this.items.push({m:a,type:"ring",t:0,dur:r,r0:e,r1:i,op:o,fade:"grow"}),a}telegraph(t,e,i){let n=this.getMesh("ring",()=>new ot(this.ringGeo,new Qt({map:this.ringTex,transparent:!0,blending:Ge,depthWrite:!1})));return n.material.color.set(i),n.material.opacity=.9,n.position.set(t.x,.12,t.z),n.scale.setScalar(e),{m:n,release:()=>this.release(n,"ring")}}decal(t,e){let i=this.getMesh("decal",()=>{let n=new ot(this.ringGeo,new Qt({map:this.scorchTex,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));return n.renderOrder=1,n});i.material.opacity=.9,i.position.set(t.x,.04+Math.random()*.02,t.z),i.rotation.y=Math.random()*6,i.scale.setScalar(e),this.items.push({m:i,type:"decal",t:0,dur:12,op:.9,fade:"late"})}release(t,e){t.visible=!1,this.scene.remove(t),this.pool[e].push(t)}flash(t,e,i=30,n=.25,r=18){let o=this.lights[this.lightIdx++%this.lights.length];o.l.color.set(e),o.l.position.set(t.x,Math.max(1.5,t.y+1),t.z),o.l.distance=r,o.t=n,o.dur=n,o.peak=i,o.l.intensity=i}addShake(t){xt.gameplay.shake&&(this.shake=Math.min(1.5,this.shake+t))}muzzle(t,e,i=1){this.burst(t,4*i,{color:16777215,color1:e,speed:4,life:.08,size:.9*i,size1:.2})}impact(t,e,i=1){this.burst(t,8*i,{color:16777215,color1:e,speed:9*i,life:.25,size:.35,size1:.05,grav:10,drag:1}),this.burst(t,2,{color:e,speed:1,life:.12,size:1.6*i,size1:.4})}explosion(t,e,i=16747056,n=null){let r=N_.set(t.x,Math.max(.6,t.y),t.z).clone();if(this.sphere(r,e*.2,e*.9,16773312,.22,.9),this.sphere(r,e*.3,e*1.1,i,.45,.6),this.ring(r,e*.3,e*1.3,i,.45),this.burst(r,18+e*5,{color:16769184,color1:i,speed:e*5,life:.45,size:1.2+e*.2,size1:.2,drag:4,up:.2}),this.burst(r,10+e*3,{color:16777215,color1:i,speed:e*9,life:.6,size:.3,size1:.05,grav:18,drag:.5,up:.8}),this.burst(r,8+e*2,{smoke:!0,color:5591114,color1:1710618,speed:e*1.5,life:1.6,size:e*.8,size1:e*1.8,drag:1.5,up:.6,alpha:.55,jitter:e*.5}),this.flash(r,i,40+e*10,.3,e*5),this.decal(r,e*.9),n){let o=Math.hypot(n.x-t.x,n.z-t.z);this.addShake(Math.max(0,e/6*(1-o/40))*.6)}}debrisBurst(t,e,i=10){for(let n=0;n<i;n++){let r=new ot(this.debrisGeo,new ae({color:n%3===0?2236962:e,metalness:.6,roughness:.5})),o=.2+Math.random()*.5;r.scale.set(o,o*(.5+Math.random()),o),r.position.set(t.x,t.y+1+Math.random()*1.5,t.z),r.castShadow=!0,this.scene.add(r);let a=Math.random()*Math.PI*2,l=4+Math.random()*9;this.debris.push({m:r,vx:Math.cos(a)*l,vy:6+Math.random()*10,vz:Math.sin(a)*l,rx:Ut(-8,8),rz:Ut(-8,8),t:0,dur:3+Math.random()*2})}}damageNumber(t,e,i="#ffffff",n=!1){xt.gameplay.damageNumbers&&this.dmgNumbers.push({x:t.x+Ut(-.6,.6),y:t.y+3.5,z:t.z+Ut(-.6,.6),text:String(Math.round(e)),color:i,t:0,big:n})}update(t){this.add.update(t),this.smoke.update(t);for(let e=this.items.length-1;e>=0;e--){let i=this.items[e];i.t+=t;let n=Math.min(1,i.t/i.dur);if(i.fade==="beam"){i.m.material.opacity=1-n;let r=i.w*(1-n*.7);i.m.scale.x=i.m.scale.y=r}else i.fade==="grow"?(i.m.scale.setScalar(i.r0+(i.r1-i.r0)*(1-Math.pow(1-n,3))),i.m.material.opacity=i.op*(1-n)):i.fade==="late"&&(i.m.material.opacity=i.op*(n<.7?1:1-(n-.7)/.3));i.t>=i.dur&&(this.release(i.m,i.type),this.items.splice(e,1))}for(let e of this.lights)e.t>0&&(e.t-=t,e.l.intensity=e.peak*Math.max(0,e.t/e.dur),e.t<=0&&(e.l.intensity=0,e.l.position.y=-100));for(let e=this.debris.length-1;e>=0;e--){let i=this.debris[e];i.t+=t,i.vy-=25*t,i.m.position.x+=i.vx*t,i.m.position.y+=i.vy*t,i.m.position.z+=i.vz*t,i.m.position.y<.15&&(i.m.position.y=.15,i.vy*=-.35,i.vx*=.6,i.vz*=.6,i.rx*=.5,i.rz*=.5),i.m.rotation.x+=i.rx*t,i.m.rotation.z+=i.rz*t,i.t<1.2&&Math.random()<.3*this.pmul&&this.trail(i.m.position,3355443,.6,.8,!0),i.t>i.dur&&(this.scene.remove(i.m),i.m.material.dispose(),this.debris.splice(e,1))}for(let e=this.dmgNumbers.length-1;e>=0;e--){let i=this.dmgNumbers[e];i.t+=t,i.y+=t*2.5,i.t>.9&&this.dmgNumbers.splice(e,1)}this.shake=Math.max(0,this.shake-t*2.5)}clear(){for(let t of this.items)this.release(t.m,t.type);this.items.length=0;for(let t of this.debris)this.scene.remove(t.m),t.m.material.dispose();this.debris.length=0,this.add.clear(),this.smoke.clear(),this.dmgNumbers.length=0}};var Do=new C,oc=new C,ac=class{constructor(t){this.game=t,this.list=[],this.sphere=new ai(1,10,8),this.cyl=new ke(.5,.5,1,8),this.cyl.rotateX(Math.PI/2),this.mats=new Map,this.pool=[],this.darkMat=new ae({color:3355443,metalness:.7,roughness:.4})}mat(t){let e=this.mats.get(t);return e||(e=new Qt({color:t,transparent:!0,blending:Ge,depthWrite:!1}),e.color.multiplyScalar(1.6),this.mats.set(t,e)),e}makeMesh(t,e,i){let n,r=new Kt;if(t==="missile"||t==="rocket"){let o=t==="rocket"?1.8:1,a=new ot(this.cyl,this.darkMat);a.scale.set(.22*o,.22*o,.9*o);let l=new ot(this.sphere,this.mat(e));l.scale.set(.2*o,.2*o,.35*o),l.position.z=-.5*o,r.add(a,l)}else if(t==="shell"||t==="grenade"){let o=new ot(this.sphere,this.darkMat);o.scale.setScalar(.3);let a=new ot(this.sphere,this.mat(e));a.scale.setScalar(.42),r.add(o,a)}else if(t==="hook"){let o=new ot(this.cyl,this.darkMat);o.scale.set(.3,.3,.8);let a=new ot(this.sphere,this.mat(e));a.scale.set(.3,.3,.3),a.position.z=.4,r.add(o,a)}else if(t==="orb"){n=new ot(this.sphere,this.mat(e)),n.scale.setScalar(i);let o=new ot(this.sphere,this.mat(16777215));o.scale.setScalar(i*.5),r.add(n,o)}else{n=new ot(this.sphere,this.mat(e)),n.scale.set(i,i,1.4);let o=new ot(this.sphere,this.mat(16777215));o.scale.set(i*.45,i*.45,1.1),r.add(n,o)}return r}spawn(t){let e={owner:t.owner,kind:t.kind||"bolt",color:t.color??16777215,pos:new C(t.x,t.y,t.z),vel:new C(t.dirX*t.speed,0,t.dirZ*t.speed),speed:t.speed,dmg:t.dmg,range:t.range,travelled:0,radius:t.radius??.35,aoe:t.aoe||0,aoeDmg:t.aoeDmg??t.dmg,homing:t.homing||null,homingPoint:t.homingPoint||null,turn:t.turn||0,opts:t.opts||{},onHit:t.onHit||null,onEnd:t.onEnd||null,delay:t.delay||0,t:0,explodeAtEnd:t.explodeAtEnd??t.aoe>0,dead:!1,pierce:t.pierce?new Set:null,width:t.width??.2};return e.mesh=this.makeMesh(e.kind,e.color,e.width),e.mesh.position.copy(e.pos),oc.copy(e.pos).add(e.vel),e.mesh.lookAt(oc),this.game.scene.add(e.mesh),this.list.push(e),e}lob(t){let e={lob:!0,owner:t.owner,kind:t.kind||"grenade",color:t.color??16755200,from:new C(t.from.x,t.from.y,t.from.z),to:new C(t.to.x,.3,t.to.z),pos:new C().copy(t.from),dur:t.dur,height:t.height??6,t:0,onLand:t.onLand,dead:!1,trailSmoke:t.trailSmoke??!0};return e.mesh=this.makeMesh(e.kind,e.color,.3),e.mesh.position.copy(e.pos),this.game.scene.add(e.mesh),this.list.push(e),e}update(t){let e=this.game,i=e.fx;for(let n of this.list){if(n.dead)continue;if(n.t+=t,n.lob){let c=Math.min(1,n.t/n.dur);n.pos.lerpVectors(n.from,n.to,c),n.pos.y+=Math.sin(c*Math.PI)*n.height,n.mesh.position.copy(n.pos),i.trail(n.pos,n.color,.5,.25),n.trailSmoke&&Math.random()<.5&&i.trail(n.pos,6710886,.5,.6,!0),c>=1&&(n.dead=!0,n.onLand&&n.onLand(n.to.clone()));continue}if(n.delay>0){n.delay-=t,n.pos.y+=t*4,n.mesh.position.copy(n.pos);continue}if(n.turn>0){let c=null,h=null;if(n.homing&&n.homing.alive&&!n.homing.isCloakedFrom(n.owner)?(c=n.homing.pos.x,h=n.homing.pos.z):n.homingPoint&&(c=n.homingPoint.x,h=n.homingPoint.z),c!==null){let d=Math.atan2(n.vel.x,n.vel.z),u=Math.atan2(c-n.pos.x,h-n.pos.z),f=Cn(d,u),g=d+Math.max(-n.turn*t,Math.min(n.turn*t,f));n.vel.set(Math.sin(g)*n.speed,0,Math.cos(g)*n.speed)}}let r=n.speed*t,o=Math.max(1,Math.ceil(r/.7)),a=n.vel.x*t/o,l=n.vel.z*t/o;for(let c=0;c<o&&!n.dead;c++){if(n.pos.x+=a,n.pos.z+=l,n.travelled+=r/o,e.map.occAt(n.pos.x,n.pos.z)>n.pos.y){n.pos.x-=a*.5,n.pos.z-=l*.5,this.finish(n,null);break}for(let h of e.robots){if(!h.alive||h===n.owner||n.pierce&&n.pierce.has(h)||n.owner&&n.owner.team&&n.owner.team===h.team)continue;let d=h.pos.x-n.pos.x,u=h.pos.z-n.pos.z,f=h.radius+n.radius;if(d*d+u*u<f*f){if(n.pierce){n.pierce.add(h),e.damage(h,n.dmg,n.owner,n.opts),i.impact(n.pos,n.color);continue}this.finish(n,h);break}}if(!n.dead&&e.hitDeployables(n))break}if(!n.dead){if(n.travelled>=n.range){this.finish(n,null,!0);continue}n.mesh.position.copy(n.pos),oc.copy(n.pos).add(n.vel),n.mesh.lookAt(oc),n.kind==="missile"||n.kind==="rocket"?(Do.copy(n.vel).normalize().multiplyScalar(-.7).add(n.pos),i.trail(Do,n.color,n.kind==="rocket"?1:.6,.2),Math.random()<.7&&i.trail(Do,7829367,n.kind==="rocket"?.8:.5,.7,!0)):n.kind==="orb"?i.trail(n.pos,n.color,n.width*2.5,.2):n.kind==="hook"&&n.owner.alive&&(n.owner.model.getMuzzle(0,Do),n.chain||(n.chain=i.persistentBeam(n.color,.08)),n.chain.set(Do,n.pos,.08))}}for(let n=this.list.length-1;n>=0;n--){let r=this.list[n];r.dead&&(this.game.scene.remove(r.mesh),r.chain&&r.chain.release(),this.list.splice(n,1))}}finish(t,e,i=!1){let n=this.game;if(t.dead=!0,t.onHit){t.onHit(t,e,t.pos.clone(),i);return}if(t.aoe>0&&(!i||t.explodeAtEnd)){n.explode(t.pos,t.aoe,t.aoeDmg,t.owner,{...t.opts,color:t.color,direct:e,directDmg:t.dmg});return}e?(n.damage(e,t.dmg,t.owner,{...t.opts,dir:t.vel}),n.fx.impact(t.pos,t.color,1)):i||n.fx.impact(t.pos,t.color,.7)}clear(){for(let t of this.list)this.game.scene.remove(t.mesh),t.chain&&t.chain.release();this.list.length=0}};var gi={blue:{id:"blue",name:"BLUE",label:"\u9752\u30C1\u30FC\u30E0",color:4033535,css:"#4a9dff"},red:{id:"red",name:"RED",label:"\u8D64\u30C1\u30FC\u30E0",color:16728128,css:"#ff5050"}};var U_=[{id:"A",x:-72,z:72,r:9},{id:"B",x:-72,z:-24,r:9},{id:"C",x:0,z:0,r:11},{id:"D",x:72,z:24,r:9},{id:"E",x:72,z:-72,r:9}],Rf={blue:{x:-100,z:100},red:{x:100,z:-100}},F_=12.5,z_=6,k_=50,B_=25;function O_(s){return Math.max(300,Math.round(s*2.5/50)*50)}function H_(s){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.font="900 96px Orbitron, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.lineWidth=10,e.strokeStyle="rgba(0,0,0,0.85)",e.strokeText(s,64,70),e.fillStyle="#ffffff",e.fillText(s,64,70);let i=new Sn(t);return i.colorSpace=Re,i}var zh=new rt(14540253),Ef=new rt(gi.blue.color),Af=new rt(gi.red.color),lc=class{constructor(t){this.game=t,this.target=O_(t.duration),this.scores={blue:0,red:0},this.points=U_.map(e=>this.buildPoint(e))}buildPoint(t){let e=new Kt;e.position.set(t.x,0,t.z);let i=new wn(t.r-.5,t.r,72);i.rotateX(-Math.PI/2);let n=new Qt({color:14540253,transparent:!0,opacity:.85,depthWrite:!1}),r=new ot(i,n);r.position.y=.12;let o=new $r(t.r-.5,72);o.rotateX(-Math.PI/2);let a=new Qt({color:14540253,transparent:!0,opacity:.12,depthWrite:!1}),l=new ot(o,a);l.position.y=.1;let c=new ae({color:10067104,metalness:.8,roughness:.3}),h=new ot(new ke(.12,.16,7,8),c);h.position.set(t.r*.55,3.5,-t.r*.55),h.castShadow=!0;let d=new ae({color:14540253,emissive:14540253,emissiveIntensity:.35,side:Ke}),u=new ot(new Di(2.6,1.6,6,1),d);u.position.set(t.r*.55+1.35,6.1,-t.r*.55),u.castShadow=!0;let f=new Hr(new Ks({map:H_(t.id),color:16777215,transparent:!0,depthWrite:!1}));return f.scale.set(4,4,1),f.position.set(0,9,0),f.renderOrder=6,e.add(r,l,h,u,f),this.game.scene.add(e),{...t,v:0,owner:null,contested:!1,nb:0,nr:0,group:e,ring:r,disc:l,flag:u,sprite:f,flagBase:u.geometry.attributes.position.array.slice()}}pointAt(t,e,i=0){for(let n of this.points)if(Math.hypot(t-n.x,e-n.z)<n.r+i)return n;return null}update(t,e){let i=this.game;for(let n of this.points){let r=0,o=0,a=[];for(let c of i.robots)!c.alive||!c.team||Math.hypot(c.pos.x-n.x,c.pos.z-n.z)>n.r||(a.push(c),c.team==="blue"?r++:o++);n.nb=r,n.nr=o,n.contested=r>0&&o>0;let l=n.v;if(e){if(!n.contested)if(r>0||o>0){let c=r>0?1:-1,h=r>0?r:o,d=F_*Math.min(2.5,1+.5*(h-1));n.v=Math.max(-100,Math.min(100,n.v+c*d*t))}else{let h=(n.owner==="blue"?100:n.owner==="red"?-100:0)-n.v;n.v+=Math.sign(h)*Math.min(Math.abs(h),z_*t)}}n.owner==="blue"&&n.v<=0&&l>0&&this.setOwner(n,null,a.filter(c=>c.team==="red"),"blue"),n.owner==="red"&&n.v>=0&&l<0&&this.setOwner(n,null,a.filter(c=>c.team==="blue"),"red"),n.v>=100&&n.owner!=="blue"&&this.setOwner(n,"blue",a.filter(c=>c.team==="blue")),n.v<=-100&&n.owner!=="red"&&this.setOwner(n,"red",a.filter(c=>c.team==="red")),e&&n.owner&&(this.scores[n.owner]+=t),this.updateVisual(n)}e&&(this.scores.blue>=this.target||this.scores.red>=this.target)&&(this.scores.blue=Math.min(this.scores.blue,this.target),this.scores.red=Math.min(this.scores.red,this.target),i.endMatch())}setOwner(t,e,i,n=null){let r=this.game,o=t.owner;t.owner=e;for(let a of i)a.stats.score+=e?k_:B_,e&&(a.stats.caps=(a.stats.caps||0)+1);r.emit("conquest",{point:t,team:e,prev:o||n,contributors:i})}updateVisual(t){let e=this.game.time,i=Math.abs(t.v)/100,n=t.v>0?Ef:t.v<0?Af:zh,r=t.owner==="blue"?Ef:t.owner==="red"?Af:zh;t.ring.material.color.copy(r),t.ring.material.opacity=t.contested?.5+Math.sin(e*12)*.4:.85,t.disc.material.color.copy(zh).lerp(n,i),t.disc.material.opacity=.08+i*.2,t.flag.material.color.copy(r),t.flag.material.emissive.copy(r),t.sprite.material.color.copy(r).lerp(new rt(16777215),.35);let o=t.flag.geometry.attributes.position,a=t.flagBase;for(let l=0;l<o.count;l++){let c=a[l*3];o.array[l*3+2]=a[l*3+2]+Math.sin(e*5+c*2.2+t.x)*.18*(c+1.3)}o.needsUpdate=!0}dispose(){for(let t of this.points)this.game.scene.remove(t.group),t.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&(e.material.map&&e.material.map.dispose(),e.material.dispose())})}};var Vh=class{constructor(){this.ctx=null,this.listenerX=0,this.listenerZ=0,this.lastPlay=new Map,this.musicMode=null,this.musicTimer=null,this.step=0,this.nextTime=0}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.comp=e.createDynamicsCompressor(),this.comp.threshold.value=-14,this.comp.ratio.value=6,this.comp.connect(this.master),this.sfxBus=e.createGain(),this.sfxBus.connect(this.comp),this.musicBus=e.createGain(),this.musicBus.connect(this.comp);let i=e.sampleRate*2;this.noise=e.createBuffer(1,i,e.sampleRate);let n=this.noise.getChannelData(0);for(let r=0;r<i;r++)n[r]=Math.random()*2-1;if(this.applyVolumes(),this.pendingMusic){let r=this.pendingMusic;this.pendingMusic=null,this.setMusic(r)}}applyVolumes(){if(!this.ctx)return;let t=xt.audio;this.master.gain.value=t.master,this.sfxBus.gain.value=t.sfx,this.musicBus.gain.value=t.music*.55}setListener(t,e){this.listenerX=t,this.listenerZ=e}env(t,e,i,n,r,o=1e-4){t.gain.setValueAtTime(1e-4,e),t.gain.linearRampToValueAtTime(n,e+i),t.gain.exponentialRampToValueAtTime(Math.max(o,1e-4),e+i+r)}osc(t,e,i,n,r,o,a,l=.005){let c=this.ctx,h=c.createOscillator();h.type=t,h.frequency.setValueAtTime(e,a),i!==e&&h.frequency.exponentialRampToValueAtTime(Math.max(i,1),a+n);let d=c.createGain();return this.env(d,a,l,r,n),h.connect(d),d.connect(o),h.start(a),h.stop(a+l+n+.05),h}noiseBurst(t,e,i,n,r,o,a,l,c=.005){let h=this.ctx,d=h.createBufferSource();d.buffer=this.noise,d.loop=!0;let u=h.createBiquadFilter();u.type=t,u.frequency.setValueAtTime(e,l),i!==e&&u.frequency.exponentialRampToValueAtTime(Math.max(i,10),l+r),u.Q.value=n;let f=h.createGain();this.env(f,l,c,o,r),d.connect(u),u.connect(f),f.connect(a),d.start(l,Math.random()*1.5),d.stop(l+c+r+.05)}play(t,e={}){if(!this.ctx)return;let i=this.ctx,n=i.currentTime,r=e.gap??.03,o=t+(e.key||""),a=this.lastPlay.get(o)||0;if(n-a<r)return;this.lastPlay.set(o,n);let l=e.vol??1,c=0;if(e.x!==void 0){let f=e.x-this.listenerX,g=e.z-this.listenerZ,x=Math.hypot(f,g),m=e.range??55;if(x>m)return;l*=Math.pow(1-x/m,1.6),c=Math.max(-1,Math.min(1,(f-g)/40))}if(l<.01)return;let h=i.createGain();if(h.gain.value=l,i.createStereoPanner){let f=i.createStereoPanner();f.pan.value=c*.7,h.connect(f),f.connect(this.sfxBus)}else h.connect(this.sfxBus);let d=n+.005,u=V_[t];u&&u(this,h,d,e)}setMusic(t){if(!this.ctx){this.pendingMusic=t;return}this.musicMode!==t&&(this.musicMode=t,this.musicTimer&&clearInterval(this.musicTimer),this.musicTimer=null,t&&(this.step=0,this.nextTime=this.ctx.currentTime+.1,this.musicTimer=setInterval(()=>this.schedule(),25)))}schedule(){let t=this.ctx,e=W_[this.musicMode];if(!e)return;let i=60/e.bpm/4;for(;this.nextTime<t.currentTime+.12;)e.play(this,this.step,this.nextTime,i),this.step++,this.nextTime+=i}},hi=s=>440*Math.pow(2,(s-69)/12),V_={laser(s,t,e){s.osc("square",1400,260,.13,.12,t,e),s.osc("sine",900,180,.12,.18,t,e)},gatling(s,t,e){s.noiseBurst("bandpass",2400,900,1.2,.06,.35,t,e),s.osc("square",180,60,.05,.12,t,e)},rail(s,t,e){s.osc("sawtooth",3200,120,.4,.18,t,e),s.noiseBurst("highpass",3e3,800,.8,.35,.25,t,e),s.osc("sine",120,40,.3,.4,t,e)},blade(s,t,e){s.noiseBurst("bandpass",1500,6e3,3,.16,.45,t,e,.02),s.osc("sawtooth",300,900,.12,.05,t,e)},plasma(s,t,e){s.osc("sine",520,110,.22,.3,t,e),s.osc("triangle",780,200,.18,.12,t,e)},flame(s,t,e){s.noiseBurst("lowpass",900,500,.7,.16,.35,t,e,.03)},explosion(s,t,e,i){let n=i.size??1;s.noiseBurst("lowpass",2600,90,.8,.6+n*.4,.9,t,e),s.osc("sine",110,30,.5+n*.3,.9,t,e)},small_boom(s,t,e){s.noiseBurst("lowpass",3e3,200,.8,.3,.6,t,e),s.osc("sine",160,50,.25,.5,t,e)},missile(s,t,e){s.noiseBurst("bandpass",900,2600,2,.3,.3,t,e,.03)},boost(s,t,e){s.noiseBurst("bandpass",350,2200,1.5,.3,.5,t,e,.02),s.osc("sawtooth",90,200,.2,.06,t,e)},shield(s,t,e){[0,4,7,12].forEach((i,n)=>s.osc("sine",hi(72+i),hi(72+i),.3,.12,t,e+n*.04))},heal(s,t,e){[0,4,7,11,14].forEach((i,n)=>s.osc("triangle",hi(76+i),hi(76+i),.25,.1,t,e+n*.06))},emp(s,t,e){s.osc("square",80,30,.6,.25,t,e),s.osc("sawtooth",2e3,60,.5,.12,t,e),s.noiseBurst("highpass",4e3,1e3,1,.4,.25,t,e)},hit(s,t,e){s.osc("square",1900,1600,.035,.12,t,e,.001)},hurt(s,t,e){s.osc("sine",200,60,.15,.4,t,e),s.noiseBurst("lowpass",1200,300,1,.1,.3,t,e)},kill(s,t,e){s.osc("square",hi(84),hi(84),.09,.14,t,e),s.osc("square",hi(91),hi(91),.2,.14,t,e+.09)},death(s,t,e){s.noiseBurst("lowpass",3e3,60,.8,1.4,1,t,e),s.osc("sine",90,25,1,1,t,e),s.osc("sawtooth",600,40,.8,.12,t,e)},respawn(s,t,e){s.osc("sawtooth",100,1600,.6,.12,t,e),s.osc("sine",200,1200,.6,.2,t,e)},zone(s,t,e){for(let i=0;i<3;i++)s.osc("square",880,880,.12,.12,t,e+i*.22)},pickup(s,t,e){[0,7,12].forEach((i,n)=>s.osc("square",hi(79+i),hi(79+i),.1,.1,t,e+n*.05))},ult(s,t,e){s.osc("sawtooth",60,400,.8,.2,t,e,.1),s.noiseBurst("bandpass",200,3e3,2,.8,.35,t,e,.2)},cloak(s,t,e){s.osc("sine",1200,200,.4,.2,t,e),s.noiseBurst("highpass",6e3,2e3,1,.3,.15,t,e)},blink(s,t,e){s.osc("square",300,2400,.12,.15,t,e),s.osc("sine",2400,300,.15,.12,t,e+.1)},slam(s,t,e){s.osc("sine",80,25,.6,1,t,e),s.noiseBurst("lowpass",800,60,1,.6,.8,t,e)},hook(s,t,e){s.osc("square",500,1500,.1,.12,t,e),s.noiseBurst("highpass",3e3,3e3,2,.12,.2,t,e)},deploy(s,t,e){s.osc("square",220,220,.06,.15,t,e),s.osc("square",330,330,.06,.15,t,e+.08),s.noiseBurst("bandpass",1500,1500,3,.08,.2,t,e)},charge(s,t,e){s.osc("sawtooth",100,1200,.7,.15,t,e,.05),s.osc("sine",200,2e3,.7,.12,t,e,.05)},beam(s,t,e){s.osc("sawtooth",70,60,.35,.25,t,e),s.noiseBurst("bandpass",1200,900,1,.35,.3,t,e)},ui_hover(s,t,e){s.osc("sine",1400,1400,.04,.07,t,e)},ui_click(s,t,e){s.osc("square",700,1200,.07,.1,t,e)},ui_back(s,t,e){s.osc("square",900,400,.08,.1,t,e)},ui_start(s,t,e){[0,5,7,12].forEach((i,n)=>s.osc("sawtooth",hi(60+i),hi(60+i),.18,.1,t,e+n*.07))}};function Cf(s,t,e=.7){s.osc("sine",150,40,.28,e,s.musicBus,t,.002)}function G_(s,t,e=.3){s.noiseBurst("highpass",1800,1200,.7,.16,e,s.musicBus,t,.001),s.osc("triangle",220,180,.08,e*.4,s.musicBus,t)}function Pf(s,t,e=.08){s.noiseBurst("highpass",8e3,8e3,1,.04,e,s.musicBus,t,.001)}function kh(s,t,e,i,n=.2){let r=s.ctx,o=r.createOscillator();o.type="sawtooth",o.frequency.value=hi(e);let a=r.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(900,t),a.frequency.exponentialRampToValueAtTime(180,t+i),a.Q.value=6;let l=r.createGain();s.env(l,t,.005,n,i),o.connect(a),a.connect(l),l.connect(s.musicBus),o.start(t),o.stop(t+i+.05)}function Bh(s,t,e,i,n=.04){for(let r of e){let o=s.ctx,a=o.createOscillator();a.type="sawtooth",a.frequency.value=hi(r),a.detune.value=(Math.random()-.5)*14;let l=o.createBiquadFilter();l.type="lowpass",l.frequency.value=1100;let c=o.createGain();c.gain.setValueAtTime(1e-4,t),c.gain.linearRampToValueAtTime(n,t+i*.3),c.gain.linearRampToValueAtTime(1e-4,t+i),a.connect(l),l.connect(c),c.connect(s.musicBus),a.start(t),a.stop(t+i+.05)}}function Oh(s,t,e,i,n=.05){s.osc("square",hi(e),hi(e),i,n,s.musicBus,t,.01)}var Hh=[{root:33,chord:[57,60,64]},{root:29,chord:[53,57,60]},{root:31,chord:[55,59,62]},{root:28,chord:[52,55,59]}],W_={title:{bpm:92,play(s,t,e,i){let n=Math.floor(t/16)%4,r=t%16,o=Hh[n];r===0&&Bh(s,e,o.chord,i*16,.035),r%8===0&&kh(s,e,o.root+12,i*6,.12),(r===0||r===10)&&Cf(s,e,.35),r%4===2&&Pf(s,e,.04);let a=[0,2,1,2];r%2===0&&Oh(s,e,o.chord[a[r/2%4]]+12,i*1.5,.018)}},battle:{bpm:132,play(s,t,e,i){let n=Math.floor(t/16)%4,r=t%16,o=Hh[n];r%4===0&&Cf(s,e,.6),(r===4||r===12)&&G_(s,e,.25),r%2===1&&Pf(s,e,.05);let a=[0,0,12,0,0,12,0,7,0,0,12,0,10,0,7,12];kh(s,e,o.root+12+a[r],i*.9,.14),r===0&&Bh(s,e,o.chord,i*16,.022);let l=[12,-1,7,-1,10,-1,7,5,3,-1,5,-1,7,-1,-1,-1];Math.floor(t/64)%2===1&&l[r]>=0&&Oh(s,e,o.root+36+l[r],i*1.8,.03)}},results:{bpm:100,play(s,t,e,i){let n=Math.floor(t/16)%4,r=t%16,o=Hh[(n+1)%4];r===0&&Bh(s,e,o.chord.map(a=>a+12),i*16,.03),r%8===0&&kh(s,e,o.root+12,i*7,.1),r%2===0&&Oh(s,e,o.chord[r/2%3]+24,i,.015)}}},ii=new Vh;var Gh=class{constructor(){this.down=new Set,this.pressed=new Set,this.mouseX=window.innerWidth/2,this.mouseY=window.innerHeight/2,this.mouseDown=!1,this.wheel=0,this.enabled=!1,this.captureHandler=null,this.touchMode=!1,window.addEventListener("keydown",t=>{if(this.captureHandler){t.preventDefault(),this.captureHandler(t.code);return}this.enabled&&(t.code==="Tab"||t.code==="Space"||t.code.startsWith("Arrow")||Object.values(xt.keys).includes(t.code))&&t.preventDefault(),this.down.has(t.code)||this.pressed.add(t.code),this.down.add(t.code)}),window.addEventListener("keyup",t=>{this.down.delete(t.code)}),window.addEventListener("blur",()=>{this.down.clear(),this.mouseDown=!1}),window.addEventListener("mousemove",t=>{this.mouseX=t.clientX,this.mouseY=t.clientY}),window.addEventListener("mousedown",t=>{t.button===0&&!this.touchMode&&(this.mouseDown=!0)}),window.addEventListener("mouseup",t=>{t.button===0&&(this.mouseDown=!1)}),window.addEventListener("contextmenu",t=>{this.enabled&&t.preventDefault()}),window.addEventListener("wheel",t=>{this.enabled&&(this.wheel+=Math.sign(t.deltaY))},{passive:!0})}isDown(t){return this.down.has(xt.keys[t])}wasPressed(t){return this.pressed.has(xt.keys[t])}codePressed(t){return this.pressed.has(t)}endFrame(){this.pressed.clear(),this.wheel=0}},ie=new Gh;var If={missiles:{t:"point",r:30,a:4},shield:{t:"self"},grenade:{t:"point",r:26,a:5.5},hyperbeam:{t:"line",r:60,w:1.6},slam:{t:"self",r:7},fortress:{t:"self"},rocket:{t:"line",r:45,w:.6},artillery:{t:"point",r:42,a:12},cloak:{t:"self"},mine:{t:"self"},blink:{t:"point",r:15,a:1.5},gauss:{t:"line",r:90,w:1.5},lunge:{t:"line",r:14,w:1.2},cyclone:{t:"self",r:5},grapple:{t:"line",r:21,w:.5},berserk:{t:"self"},turret:{t:"self"},repair:{t:"self"},emp:{t:"self",r:9},drones:{t:"self"},napalm:{t:"point",r:24,a:5},leap:{t:"point",r:18,a:5.5},vent:{t:"line",r:9.5,w:3},meltdown:{t:"self",r:14}},X_=60,Lf=130,cc=14,q_=280;function Wh(s,t){try{s.setPointerCapture(t)}catch{}}function Y_(){return window.matchMedia&&window.matchMedia("(pointer: coarse)").matches}var Xh=class{constructor(){this.active=!1,this.left={id:null,ox:0,oy:0,vx:0,vy:0},this.right={id:null,cx:0,cy:0,vx:0,vy:0,mag:0,t0:0,moved:0},this.sk=null,this.pending=[],this.tapFireT=0,this.boostTap=!1,this.boardOpen=!1,this.indicator=null,this.root=null,this.buttons={},this.lastAim={x:0,z:1},window.addEventListener("pointerdown",t=>{t.pointerType==="touch"&&xt.touch.mode==="auto"&&this.setActive(!0)},!0),window.addEventListener("pointermove",t=>{t.pointerType==="mouse"&&xt.touch.mode==="auto"&&Math.abs(t.movementX)+Math.abs(t.movementY)>2&&this.setActive(!1)}),window.addEventListener("keydown",()=>{xt.touch.mode==="auto"&&this.active&&!document.activeElement?.matches?.("input")&&this.setActive(!1)}),this.applyMode()}applyMode(){let t=xt.touch.mode;this.setActive(t==="touch"?!0:t==="pc"?!1:this.active||Y_())}setActive(t){this.active===t&&document.body.classList.contains("touch-mode")===t||(this.active=t,ie.touchMode=t,document.body.classList.toggle("touch-mode",t),t||this.resetSticks(),this.layout())}resetSticks(){this.left.id=null,this.left.vx=this.left.vy=0,this.right.id=null,this.right.vx=this.right.vy=0,this.right.mag=0,this.sk=null,this.indicator=null,this.pending.length=0,this.root&&(this.root.querySelector("#ls-base").classList.remove("on"),this.setKnob("#rs-knob",0,0))}build(t,e){this.root=t,t.innerHTML=`
      <div id="tz-left"><div id="ls-base"><div id="ls-knob"></div></div></div>
      <div id="rs-base"><div id="rs-knob"></div></div>
      <div id="tbtn-top"><button id="tbtn-board" class="tbtn-s">SCORE</button><button id="tbtn-pause" class="tbtn-s">II</button></div>`,this.buttons={};for(let i of e){let n=document.createElement("div");n.className="tbtn skill"+(i.ult?" ult":"")+(i.key==="boost"?" boost":""),n.dataset.key=i.key,n.innerHTML=`<div class="sk-icon">${i.icon}</div><div class="sk-cd"></div><div class="sk-num"></div>`,n.style.setProperty("--glow",i.glow),t.appendChild(n),this.buttons[i.key]={el:n,def:i,cd:n.querySelector(".sk-cd"),num:n.querySelector(".sk-num")}}this.slotDefs=e,this.bindEvents(),this.layout(),this.resetSticks()}layout(){if(!this.root)return;let t=xt.touch.scale;this.root.style.setProperty("--ts",t),this.root.style.opacity=xt.touch.opacity;let e=window.innerWidth,i=window.innerHeight,n=Math.min(1,i/420)*t,r=66*n,o=e-40*n-r-20,a=i-30*n-r-10,l=this.root.querySelector("#rs-base");l.style.width=l.style.height=`${r*2}px`,l.style.left=`${o-r}px`,l.style.top=`${a-r}px`,this.right.cx=o,this.right.cy=a,this.right.r=r;let c={skill1:[180,118],skill2:[140,122],skill3:[100,124],ult:[158,196],boost:[212,116]};for(let[h,d]of Object.entries(this.buttons)){let[u,f]=c[h]||[180,120],g=u*Math.PI/180,x=(h==="ult"?70:56)*n,m=o+Math.cos(g)*f*n,p=a-Math.sin(g)*f*n;d.el.style.width=d.el.style.height=`${x}px`,d.el.style.left=`${m-x/2}px`,d.el.style.top=`${p-x/2}px`,d.cx=m,d.cy=p,d.r=x/2}}setKnob(t,e,i){let n=this.root&&this.root.querySelector(t);n&&(n.style.transform=`translate(calc(-50% + ${e}px), calc(-50% + ${i}px))`)}bindEvents(){let t=this.root,e={passive:!1},i=t.querySelector("#tz-left"),n=t.querySelector("#ls-base");i.addEventListener("pointerdown",l=>{if(l.preventDefault(),this.left.id!==null)return;Wh(i,l.pointerId),this.left.id=l.pointerId,this.left.ox=l.clientX,this.left.oy=l.clientY,this.left.vx=this.left.vy=0;let c=i.getBoundingClientRect();n.style.left=`${l.clientX-c.left}px`,n.style.top=`${l.clientY-c.top}px`,n.classList.add("on"),this.setKnob("#ls-knob",0,0)},e),i.addEventListener("pointermove",l=>{if(l.pointerId!==this.left.id)return;let c=l.clientX-this.left.ox,h=l.clientY-this.left.oy,d=Math.hypot(c,h),u=X_*xt.touch.scale;d>u&&(c=c/d*u,h=h/d*u),this.left.vx=c/u,this.left.vy=h/u,this.setKnob("#ls-knob",c,h)});let r=l=>{l.pointerId===this.left.id&&(this.left.id=null,this.left.vx=this.left.vy=0,n.classList.remove("on"))};i.addEventListener("pointerup",r),i.addEventListener("pointercancel",r);let o=t.querySelector("#rs-base");o.addEventListener("pointerdown",l=>{l.preventDefault(),this.right.id===null&&(Wh(o,l.pointerId),Object.assign(this.right,{id:l.pointerId,vx:0,vy:0,mag:0,t0:performance.now(),moved:0}))},e),o.addEventListener("pointermove",l=>{if(l.pointerId!==this.right.id)return;let c=l.clientX-this.right.cx,h=l.clientY-this.right.cy,d=Math.hypot(c,h),u=this.right.r*.8;this.right.moved=Math.max(this.right.moved,d),d>u&&(c=c/d*u,h=h/d*u),this.right.vx=c/u,this.right.vy=h/u,this.right.mag=Math.min(1,d/u),this.setKnob("#rs-knob",c,h)});let a=l=>{if(l.pointerId!==this.right.id)return;performance.now()-this.right.t0<q_&&this.right.moved<cc&&(this.tapFireT=.22),this.right.id=null,this.right.vx=this.right.vy=0,this.right.mag=0,this.setKnob("#rs-knob",0,0)};o.addEventListener("pointerup",a),o.addEventListener("pointercancel",a);for(let[l,c]of Object.entries(this.buttons)){let h=c.el;h.addEventListener("pointerdown",u=>{if(u.preventDefault(),!this.sk){if(Wh(h,u.pointerId),l==="boost"){this.boostTap=!0,h.classList.add("press"),this.sk={id:u.pointerId,key:l,boost:!0,b:c};return}this.sk={id:u.pointerId,key:l,b:c,x:u.clientX,y:u.clientY,t0:performance.now(),left:!1},h.classList.add("press")}},e),h.addEventListener("pointermove",u=>{let f=this.sk;!f||u.pointerId!==f.id||f.boost||(f.x=u.clientX,f.y=u.clientY,Math.hypot(f.x-c.cx,f.y-c.cy)>c.r+6&&(f.left=!0))});let d=u=>{let f=this.sk;if(!f||u.pointerId!==f.id||(this.sk=null,h.classList.remove("press"),this.indicator=null,f.boost))return;let g=Math.hypot(f.x-c.cx,f.y-c.cy),x=g<=c.r+6,m=!f.left&&performance.now()-f.t0<600;if(u.type==="pointercancel"||x&&f.left)return;let p={key:l,auto:m||g<cc,sx:f.x-c.cx,sy:f.y-c.cy,frac:Math.min(1,Math.max(.12,g/(Lf*xt.touch.scale)))};this.pending.push(p)};h.addEventListener("pointerup",d),h.addEventListener("pointercancel",d)}t.querySelector("#tbtn-pause").addEventListener("click",()=>window.dispatchEvent(new Event("steel-pause"))),t.querySelector("#tbtn-board").addEventListener("click",()=>{this.boardOpen=!this.boardOpen})}toWorld(t,e,i){let n={x:-Math.sin(t.camAngle),z:-Math.cos(t.camAngle)},r={x:-n.z,z:n.x};return{x:r.x*e+n.x*-i,z:r.z*e+n.z*-i}}nearestEnemy(t,e){let i=t.player,n=null,r=e;for(let o of t.robots){if(!t.isEnemy(i,o)||!o.alive||o.isCloakedFrom(i)||o.seen<.5)continue;let a=Math.hypot(o.pos.x-i.pos.x,o.pos.z-i.pos.z);a<r&&(r=a,n=o)}return n}skillIdOf(t,e){let i=t.player.def;return e==="ult"?i.ult.id:i.skills[+e.slice(-1)-1].id}fill(t,e,i){let n=t.player,r=this.toWorld(t,this.left.vx,this.left.vy),o=Math.hypot(r.x,r.z);o>.15?(r.x/=o,r.z/=o):(r.x=0,r.z=0),e.mx=r.x,e.mz=r.z,e.skill[0]=e.skill[1]=e.skill[2]=!1,e.ult=!1,e.boost=this.boostTap,this.boostTap=!1,e.fire=!1;let a=null;if(this.right.id!==null&&this.right.mag>.2)a=this.toWorld(t,this.right.vx,this.right.vy),e.fire=this.right.mag>.35;else if(this.tapFireT>0){this.tapFireT-=i;let d=this.nearestEnemy(t,(n.def.primary.range||10)+6);d&&(a={x:d.pos.x-n.pos.x,z:d.pos.z-n.pos.z}),e.fire=!0}else Math.hypot(r.x,r.z)>.2&&(a={x:r.x,z:r.z});if(a){let d=Math.hypot(a.x,a.z)||1;this.lastAim={x:a.x/d,z:a.z/d}}let l=14;if(this.indicator=null,this.sk&&!this.sk.boost){let d=this.sk,u=d.b,f=this.skillIdOf(t,d.key),g=If[f]||{t:"self"},x=Math.hypot(d.x-u.cx,d.y-u.cy),m=d.left&&x<=u.r+6,p=this.lastAim,v=.6;if(x>=cc){let T=this.toWorld(t,d.x-u.cx,d.y-u.cy),M=Math.hypot(T.x,T.z)||1;p={x:T.x/M,z:T.z/M},v=Math.min(1,Math.max(.12,x/(Lf*xt.touch.scale)))}else if(g.t!=="self"){let T=this.nearestEnemy(t,(g.r||20)+8);if(T){let M=T.pos.x-n.pos.x,w=T.pos.z-n.pos.z,S=Math.hypot(M,w)||1;p={x:M/S,z:w/S},v=g.r?Math.min(1,S/g.r):.6}}this.indicator={...g,dirX:p.x,dirZ:p.z,dist:(g.r||0)*v,cancel:m,auto:x<cc}}let c=this.pending.shift();if(c){let d=this.skillIdOf(t,c.key),u=If[d]||{t:"self"},f=this.lastAim,g=(u.r||14)*.6;if(u.t!=="self")if(c.auto){let x=this.nearestEnemy(t,(u.r||20)+8);if(x){let m=x.pos.x-n.pos.x,p=x.pos.z-n.pos.z,v=Math.hypot(m,p)||1;f={x:m/v,z:p/v},g=v}}else{let x=this.toWorld(t,c.sx,c.sy),m=Math.hypot(x.x,x.z)||1;f={x:x.x/m,z:x.z/m},g=u.t==="point"?Math.max(2,(u.r||14)*c.frac):u.r||14}a=f,this.lastAim=f,l=Math.max(2,g),c.key==="ult"?e.ult=!0:e.skill[+c.key.slice(-1)-1]=!0}let h=a?(()=>{let d=Math.hypot(a.x,a.z)||1;return{x:a.x/d,z:a.z/d}})():this.lastAim;return e.aimX=n.pos.x+h.x*l,e.aimZ=n.pos.z+h.z*l,e}},ui=new Xh;var di=new C,Df=new to,Nf=new _t,Z_=new Si(new C(0,1,0),-1.6),Ms=[178,118,80,52,32,18],Uf=[.03,.03,.045,.06,.08,.1],No=class{constructor(t,e,i,n){this.renderer=t,this.map=e,this.opts=n,this.attract=!!n.attract,this.mode=this.attract?"br":n.mode||"br",this.scene=new _i,this.scene.background=new rt(1909031),this.scene.fog=new zr(1909031,95,230),this.scene.environment=i,this.scene.environmentIntensity=.35,this.scene.add(e.group);let r=new Yn(10466512,4865845,1.7);this.scene.add(r),this.sun=new hn(16769728,3.2),this.sun.castShadow=!0,this.sun.shadow.camera.left=-55,this.sun.shadow.camera.right=55,this.sun.shadow.camera.top=55,this.sun.shadow.camera.bottom=-55,this.sun.shadow.camera.near=1,this.sun.shadow.camera.far=200,this.sun.shadow.bias=-6e-4,this.sun.shadow.normalBias=.04,this.scene.add(this.sun,this.sun.target),this.applyShadowSettings();let o=new Tn(4239615,30,30,1.5);o.position.set(0,7,0),this.scene.add(o),this.camera=new Ne(36,window.innerWidth/window.innerHeight,1,600),this.camTarget=new C,this.camZoom=xt.gameplay.camZoom,this.camAngle=Math.PI/4,this.fx=new rc(this.scene),this.proj=new ac(this),this.robots=[],this.deployables=[],this.timers=[],this.pickups=[],this.listeners=[],this.time=0,this.duration=n.duration||300,this.timeLeft=this.duration,this.state="countdown",this.countdown=this.attract?0:3.5,this.endT=0,this.timeScale=1,this.smokeT=0,this.ts=this.attract?null:new jl(e,t),this.tsOn=!1,this.buildZone(),this.buildPickups(),this.conquest=this.mode==="team"?new lc(this):null,this.spawnRobots(),this.attract&&(this.state="playing",this.followIdx=0,this.followT=0)}on(t){this.listeners.push(t)}emit(t,e){for(let i of this.listeners)i(t,e)}applyShadowSettings(){let t=xt.graphics;this.sun.castShadow=t.shadows;let e=t.quality==="low"?1024:t.quality==="medium"?1536:2048;this.sun.shadow.mapSize.x!==e&&(this.sun.shadow.mapSize.set(e,e),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}spawnRobots(){let t=this.opts,e=[...tf].sort(()=>Math.random()-.5),i=t.attract?10:t.bots+1;this.mode==="team"&&i%2&&i++;let n=[];for(let l=0;l<i;l++)n.push(Rn[l%Rn.length]);if(n.sort(()=>Math.random()-.5),!t.attract){let l=$l[t.playerClass]||Rn[0];this.player=new Co(this,l,t.playerName||"PLAYER",!0),this.player.ctl=ic(),this.robots.push(this.player)}let r=0;for(;this.robots.length<i;){let l=e[r++%e.length];this.player&&l===this.player.name&&(l=e[r++%e.length]);let c=n[this.robots.length%n.length],h=new Co(this,c,l,!1);h.brain=new Po(h,this,t.attract?"normal":t.difficulty),this.robots.push(h)}if(this.mode==="team"){let l=i/2;this.robots.forEach((c,h)=>c.setTeam(h<l?"blue":"red"));for(let c of this.robots)this.respawn(c,null,!0);return}let o=this.robots.length,a=Math.random()*Math.PI*2;this.robots.forEach((l,c)=>{let h=a+c/o*Math.PI*2,d=60+Math.random()*30,u=this.map.randomFreePoint(Math.cos(h)*d,Math.sin(h)*d,14);this.respawn(l,u,!0)})}buildZone(){let t=cf().clone();t.needsUpdate=!0,t.wrapS=Vn;let e=new Qt({map:t,transparent:!0,blending:Ge,depthWrite:!1,side:Ke,color:5941503}),i=new ke(1,1,1,96,1,!0);i.translate(0,.5,0),this.zoneMesh=new ot(i,e),this.zoneMesh.renderOrder=5,this.scene.add(this.zoneMesh);let n=new wn(.985,1,128);n.rotateX(-Math.PI/2),this.nextRing=new ot(n,new Qt({color:16777215,transparent:!0,opacity:.55,depthWrite:!1})),this.nextRing.position.y=.1,this.scene.add(this.nextRing);let r=Ms.length-1,o=this.duration/r;this.zone={cx:0,cz:0,r:Ms[0],phase:0,state:"wait",wait:o*.55,shrink:o*.45,t:o*.55,from:{cx:0,cz:0,r:Ms[0]},next:null,tickT:0},this.zone.next=this.pickNextZone()}pickNextZone(){let t=this.zone,e=Ms[Math.min(t.phase+1,Ms.length-1)],i=Math.max(0,t.r-e)*.45,n=Math.random()*Math.PI*2,r=Math.random()*i,o=120-e*.7;return{cx:fe(t.cx+Math.cos(n)*r,-o,o),cz:fe(t.cz+Math.sin(n)*r,-o,o),r:e}}buildPickups(){for(let t of this.map.pickupSpots){let e=new Kt,i=t.type==="repair"?5308288:5290239,n=new ae({color:i,emissive:i,emissiveIntensity:.7,metalness:.2,roughness:.4}),r;t.type==="repair"?(r=new Kt,r.add(new ot(new Fe(1.1,.35,.35),n)),r.add(new ot(new Fe(.35,1.1,.35),n))):r=new ot(new er(.6),n),r.position.y=1.4,e.add(r);let o=new ot(new ke(1.6,1.8,.2,20),new ae({color:3356218,metalness:.7,roughness:.4}));o.position.y=.1,o.receiveShadow=!0,e.add(o);let a=new ot(new us(1.4,.06,6,32),new Qt({color:i}));a.rotation.x=Math.PI/2,a.position.y=.22,e.add(a),e.position.set(t.x,0,t.z),this.scene.add(e),this.pickups.push({...t,active:!0,t:0,group:e,item:r})}}after(t,e){this.timers.push({t,fn:e})}isEnemy(t,e){return!t||!e||t===e?!1:!(t.team&&t.team===e.team)}sfx(t,e,i={}){this.attract&&!i.force&&(i={...i,vol:(i.vol??1)*.35});let n=e&&e.pos?e.pos:e;n?ii.play(t,{...i,x:n.x,z:n.z}):ii.play(t,i)}shakeAt(t,e){let i=this.camTarget,n=Math.hypot(i.x-t.x,i.z-t.z);this.fx.addShake(e*Math.max(0,1-n/45))}onUlt(t){this.fx.ring(t.pos,1,7,t.def.colors.glow,.6),t.isPlayer&&this.emit("announce",{text:t.def.ult.name,sub:"ULTIMATE",color:"#ffd24a",small:!0})}damage(t,e,i,n={}){if(!t.alive||this.state==="ended"||t.s.invulnT>0&&!n.zone||i===t||i&&i.team&&i.team===t.team)return 0;let r=e;if(i&&i.alive!==void 0&&(i.s.berserkT>0&&(r*=1.6),i.s.ambushT>0&&(r*=1.5),i.brain&&(r*=i.brain.diff.dmgMul)),t.s.fortressT>0&&(r*=.5),t.s.meltdown&&(r*=.7),t.s.shield>0&&!n.zone){let a=Math.min(t.s.shield,r);t.s.shield-=a,r-=a,a>0&&this.fx.burst(di.set(t.pos.x,2,t.pos.z),4,{color:t.def.colors.glow,speed:5,life:.2,size:.5})}t.hp-=r,t.model.flash(),i&&i!==t&&(i.stats.dmg+=r,i.ultCharge=Math.min(100,i.ultCharge+r*sf),t.damagers.set(i,this.time),i.s.berserkT>0&&i.heal(r*.3),i.isPlayer&&!n.burnTick&&this.sfx("hit",null,{gap:.06}));let o=t.def.mass;if(n.knock&&n.dir){let a=Math.hypot(n.dir.x,n.dir.z)||1;t.kvel.x+=n.dir.x/a*n.knock/o,t.kvel.z+=n.dir.z/a*n.knock/o}if(n.stun&&(t.s.stunT=Math.max(t.s.stunT,n.stun),t.channel)){let a=t.channel;t.channel=null,a.end&&a.end()}return n.slow&&(t.s.slowT=Math.max(t.s.slowT,n.slowT||1.5),t.s.slowMul=n.slow),n.burn&&(t.s.burnT=Math.max(t.s.burnT,n.burnT||2),t.s.burnDps=n.burn,t.s.burnSrc=i),t.brain&&t.brain.onDamaged(i),t.isPlayer&&r>0&&(this.sfx("hurt",null,{gap:.15,vol:.6}),this.emit("hurt",{amount:r})),r>.5&&!n.noNumber&&(i&&i.isPlayer||t.isPlayer)&&this.fx.damageNumber(t.pos,r,t.isPlayer?"#ff6060":n.burnTick?"#ffa040":"#ffffff",r>=120),t.hp<=0&&this.kill(t,i),r}explode(t,e,i,n,r={}){let o=r.color??16747056;r.small?(this.fx.sphere(di.set(t.x,Math.max(.8,t.y),t.z),e*.3,e*1,o,.3,.8),this.fx.burst(di,14,{color:16777215,color1:o,speed:e*5,life:.35,size:.9,size1:.1}),this.fx.flash(di,o,20,.2,e*5),this.sfx("small_boom",t,{gap:.04})):(this.fx.explosion(t,e,o,this.camTarget),this.sfx("explosion",t,{size:e/6,gap:.05}));for(let a of this.robots){if(!a.alive||a===n)continue;let l=a.pos.x-t.x,c=a.pos.z-t.z,h=Math.hypot(l,c);if(h>e+a.radius)continue;let d=1-.5*fe(h/e,0,1);this.damage(a,i*d,n,{...r,dir:{x:l||.01,z:c},knock:r.knock??e*1.2})}for(let a of[...this.deployables])a.type!=="turret"||a.owner===n||n&&!this.isEnemy(n,a.owner)||Math.hypot(a.x-t.x,a.z-t.z)<e+1&&this.damageDeployable(a,i)}kill(t,e){if(!t.alive)return;if(t.alive=!1,t.hp=0,t.respawnT=5,t.channel){let r=t.channel;t.channel=null,r.end&&r.end()}if(t.forced=null,!e||e===t){let r=null,o=-1;for(let[a,l]of t.damagers)this.time-l<Ih&&l>o&&a!==t&&(o=l,r=a);e=r}t.stats.deaths++,t.stats.score+=is.death,t.stats.streak=0;let i=[];e&&(e.stats.kills++,e.stats.score+=is.kill,e.stats.streak++,e.stats.bestStreak=Math.max(e.stats.bestStreak,e.stats.streak),e.ultCharge=Math.min(100,e.ultCharge+rf),this.time-e.lastKillTime<6?e.multi++:e.multi=1,e.lastKillTime=this.time);for(let[r,o]of t.damagers)r!==e&&r!==t&&this.time-o<Ih&&(r.stats.assists++,r.stats.score+=is.assist,i.push(r));t.damagers.clear();let n=t.pos;this.fx.explosion(di.set(n.x,1.8,n.z),5,t.def.colors.glow,this.camTarget),this.fx.explosion(di.set(n.x,1,n.z),3.5,16747056,null),this.fx.debrisBurst(n,t.def.colors.primary,12),this.sfx("death",n),t.setVisible(!1);for(let r of[...this.deployables])r.owner===t&&r.type==="drone"&&this.removeDeployable(r);if(this.emit("kill",{killer:e,victim:t,assists:i}),e&&e.isPlayer){this.sfx("kill",null);let o={2:"DOUBLE KILL",3:"TRIPLE KILL",4:"QUADRA KILL"}[e.multi]||(e.multi>=5?"RAMPAGE":null);!o&&e.stats.streak===5&&(o="UNSTOPPABLE"),this.emit("announce",{text:o||`${t.name} \u3092\u6483\u7834`,sub:`+${is.kill}`,color:o?"#ff5050":"#ffd24a",small:!o})}t.isPlayer&&this.emit("playerDeath",{killer:e})}respawn(t,e=null,i=!1){let n=e;if(!n&&this.mode==="team"){let r=Rf[t.team],o=null,a=-1;for(let l=0;l<8;l++){let c=this.map.randomFreePoint(r.x,r.z,13),h=999;for(let d of this.robots)d.alive&&this.isEnemy(t,d)&&(h=Math.min(h,Math.hypot(d.pos.x-c.x,d.pos.z-c.z)));h>a&&(a=h,o=c)}n=o}if(!n){let r=this.zone,o=null,a=-1;for(let l=0;l<12;l++){let c=this.map.randomFreePoint(r.cx,r.cz,Math.min(r.r*.75,105)),h=999;for(let d of this.robots)d!==t&&d.alive&&(h=Math.min(h,Math.hypot(d.pos.x-c.x,d.pos.z-c.z)));h>a&&(a=h,o=c)}n=o}t.resetState(),t.pos.set(n.x,0,n.z),t.alive=!0,t.s.invulnT=i?0:2,t.aimYaw=Math.atan2(-n.x,-n.z),t.seen=t.isPlayer||this.player&&t.team&&t.team===this.player.team?1:0,t.model.legsYaw=t.aimYaw,t.setVisible(!0),t.brain&&t.brain.reset(),i||(this.fx.beam(di.set(n.x,40,n.z),new C(n.x,0,n.z),t.def.colors.glow,1.4,.6),this.fx.ring(t.pos,1,5,t.def.colors.glow,.6),this.fx.burst(di.set(n.x,1,n.z),30,{color:16777215,color1:t.def.colors.glow,speed:8,life:.5,size:.8,size1:.1,flat:!0}),this.sfx("respawn",t.isPlayer?null:n)),t.isPlayer&&!i&&this.emit("respawn",{})}addMine(t,e,i){let n=new Kt,r=new ot(new ke(.5,.6,.25,10),new ae({color:2763312,metalness:.8,roughness:.3}));r.position.y=.13;let o=new ot(new ai(.12,8,6),new Qt({color:t.def.colors.glow}));o.position.y=.3,n.add(r,o);for(let a=0;a<4;a++){let l=new ot(new Fe(.08,.08,.6),r.material);l.rotation.y=a/4*Math.PI*2+.78,l.position.set(Math.sin(l.rotation.y)*.5,.08,Math.cos(l.rotation.y)*.5),n.add(l)}n.position.set(e,0,i),this.scene.add(n),this.deployables.push({type:"mine",owner:t,x:e,z:i,armT:1,life:30,mesh:n,light:o})}addTurret(t,e,i){let n=new Kt,r=new ae({color:2895920,metalness:.7,roughness:.4}),o=new ae({color:t.def.colors.secondary,metalness:.5,roughness:.5}),a=new Qt({color:t.def.colors.glow});for(let u=0;u<3;u++){let f=new ot(new Fe(.15,1.4,.15),r),g=u/3*Math.PI*2;f.position.set(Math.sin(g)*.5,.6,Math.cos(g)*.5),f.rotation.set(Math.cos(g)*.4,0,-Math.sin(g)*.4),f.castShadow=!0,n.add(f)}let l=new Kt;l.position.y=1.4;let c=new ot(new Fe(.8,.6,.9),o);c.castShadow=!0;let h=new ot(new ke(.08,.08,1,8),r);h.rotation.x=Math.PI/2,h.position.z=.8;let d=new ot(new Fe(.5,.1,.05),a);d.position.set(0,.1,.46),l.add(c,h,d),n.add(l),n.position.set(e,0,i),this.scene.add(n),this.fx.ring(n.position,.5,3,t.def.colors.glow,.4),this.deployables.push({type:"turret",owner:t,x:e,z:i,life:12,hp:260,fireT:.5,mesh:n,head:l,mats:[r,o,a]})}addDrone(t,e){let i=new Kt,n=new ot(new er(.35),new ae({color:t.def.colors.secondary,metalness:.6,roughness:.3})),r=new ot(new ai(.15,8,6),new Qt({color:t.def.colors.glow}));r.position.y=-.2,i.add(n,r),i.position.set(t.pos.x,3,t.pos.z),this.scene.add(i),this.deployables.push({type:"drone",owner:t,phase:e,life:10,fireT:Ut(.2,.6),mesh:i,x:t.pos.x,z:t.pos.z})}addFirePool(t,e,i,n,r){let o=this.fx.telegraph({x:e,z:i},n,16732176);this.fx.decal({x:e,z:i},n),this.deployables.push({type:"fire",owner:t,x:e,z:i,r:n,life:r,tickT:0,tel:o})}removeDeployable(t){let e=this.deployables.indexOf(t);e>=0&&this.deployables.splice(e,1),t.mesh&&(this.scene.remove(t.mesh),t.mesh.traverse(i=>{i.isMesh&&i.geometry.dispose()})),t.tel&&t.tel.release()}damageDeployable(t,e){t.hp-=e,t.hp<=0&&(this.fx.explosion(di.set(t.x,1.2,t.z),2.5,16752704,this.camTarget),this.sfx("small_boom",t),this.removeDeployable(t))}hitDeployables(t){for(let e of this.deployables)if(!(e.type!=="turret"||e.owner===t.owner||!this.isEnemy(t.owner,e.owner))&&Math.hypot(e.x-t.pos.x,e.z-t.pos.z)<1+t.radius)return t.dead=!0,t.aoe>0?this.explode(t.pos,t.aoe,t.aoeDmg,t.owner,{...t.opts,color:t.color}):(this.damageDeployable(e,t.dmg),this.fx.impact(t.pos,t.color)),!0;return!1}nearestEnemy(t,e,i,n){let r=null,o=n;for(let a of this.robots){if(!this.isEnemy(t,a)||!a.alive||a.isCloakedFrom(t)||a.s.invulnT>0)continue;let l=Math.hypot(a.pos.x-e,a.pos.z-i);l<o&&this.map.lineOfSight(e,i,a.pos.x,a.pos.z,1.6)&&(o=l,r=a)}return r}updateDeployables(t){for(let e of[...this.deployables]){if(e.life-=t,e.life<=0||e.type==="drone"&&!e.owner.alive){(e.type==="drone"||e.type==="turret")&&this.fx.burst(di.set(e.x,e.mesh.position.y,e.z),10,{color:16777215,color1:e.owner.def.colors.glow,speed:5,life:.3,size:.5}),this.removeDeployable(e);continue}switch(e.type){case"mine":{if(e.armT-=t,e.light.visible=e.armT>0?!0:Math.sin(this.time*10)>0,e.armT>0)break;for(let i of this.robots)if(!(!this.isEnemy(e.owner,i)||!i.alive)&&Math.hypot(i.pos.x-e.x,i.pos.z-e.z)<3.5+i.radius*.5){this.removeDeployable(e),this.explode({x:e.x,y:.5,z:e.z},4.2,220,e.owner,{color:e.owner.def.colors.glow,knock:12});break}break}case"turret":{e.fireT-=t;let i=this.nearestEnemy(e.owner,e.x,e.z,24);if(i){let n=Math.atan2(i.pos.x-e.x,i.pos.z-e.z);if(e.head.rotation.y=n,e.fireT<=0){e.fireT=.35;let r=e.x+Math.sin(n)*1.3,o=e.z+Math.cos(n)*1.3;this.proj.spawn({owner:e.owner,kind:"bolt",x:r,y:1.4,z:o,dirX:Math.sin(n+Ut(-.03,.03)),dirZ:Math.cos(n+Ut(-.03,.03)),speed:60,dmg:20,range:28,width:.15,color:e.owner.def.colors.glow}),this.fx.muzzle(di.set(r,1.4,o),e.owner.def.colors.glow,.6),this.sfx("laser",e,{vol:.5,key:"t"})}}else e.head.rotation.y+=t;break}case"drone":{let i=e.owner,n=this.time*2+e.phase,r=i.pos.x+Math.cos(n)*3.2,o=i.pos.z+Math.sin(n)*3.2;if(e.x+=(r-e.x)*Math.min(1,t*8),e.z+=(o-e.z)*Math.min(1,t*8),e.mesh.position.set(e.x,3.6+Math.sin(this.time*4+e.phase)*.3,e.z),e.mesh.rotation.y+=t*3,e.fireT-=t,e.fireT<=0){let a=this.nearestEnemy(i,e.x,e.z,22);if(e.fireT=a?Ut(.5,.7):.2,a){let l=Math.atan2(a.pos.x-e.x,a.pos.z-e.z);this.proj.spawn({owner:i,kind:"bolt",x:e.x,y:2.4,z:e.z,dirX:Math.sin(l),dirZ:Math.cos(l),speed:55,dmg:28,range:26,width:.13,color:i.def.colors.glow}),this.sfx("laser",e,{vol:.4,key:"d",gap:.08})}}break}case"fire":{e.tickT-=t,e.tel.m.material.opacity=.5+Math.sin(this.time*8)*.2;let i=Math.ceil(3*this.fx.pmul);for(let n=0;n<i;n++){let r=Math.random()*Math.PI*2,o=Math.sqrt(Math.random())*e.r;this.fx.add.spawn(e.x+Math.cos(r)*o,.3,e.z+Math.sin(r)*o,0,Ut(2,4),0,Ut(.4,.7),1.4,.3,J_,K_,0,1,.9)}if(Math.random()<.3&&this.fx.trail(di.set(e.x+Ut(-e.r,e.r)*.6,2,e.z+Ut(-e.r,e.r)*.6),3355443,1.5,1.2,!0),e.tickT<=0){e.tickT=.25;for(let n of this.robots)!this.isEnemy(e.owner,n)||!n.alive||Math.hypot(n.pos.x-e.x,n.pos.z-e.z)<e.r+n.radius*.5&&this.damage(n,17,e.owner,{burn:20,burnT:1.5,noNumber:!0})}break}}}}updateZone(t){let e=this.zone;if(this.mode==="team"){this.zoneMesh.visible=!1,this.nextRing.visible=!1,e.r=9999,e.next=null;return}if(e.phase>=Ms.length-1)return;if(e.t-=t,e.state==="wait")e.t<=0&&(e.state="shrink",e.t=e.shrink,e.from={cx:e.cx,cz:e.cz,r:e.r},this.attract||(this.emit("announce",{text:"ZONE SHRINKING",sub:"\u5B89\u5168\u5730\u5E2F\u304C\u7E2E\u5C0F\u4E2D",color:"#5ab0ff",small:!0}),this.sfx("zone",null)));else{let n=1-Math.max(0,e.t)/e.shrink,r=e.next;e.cx=Zl(e.from.cx,r.cx,n),e.cz=Zl(e.from.cz,r.cz,n),e.r=Zl(e.from.r,r.r,n),e.t<=0&&(e.phase++,e.state="wait",e.t=e.wait,e.next=e.phase<Ms.length-1?this.pickNextZone():null,e.next||(e.t=1/0))}if(e.tickT-=t,e.tickT<=0){e.tickT=.5;let n=Uf[Math.min(e.phase,Uf.length-1)];for(let r of this.robots)r.alive&&Math.hypot(r.pos.x-e.cx,r.pos.z-e.cz)>e.r&&this.damage(r,r.maxHp*n*.5,null,{zone:!0,noNumber:!r.isPlayer})}this.zoneMesh.position.set(e.cx,0,e.cz),this.zoneMesh.scale.set(e.r,45,e.r);let i=this.zoneMesh.material.map;i.repeat.set(Math.max(1,Math.round(e.r*Math.PI*2/10)),1),i.offset.x=this.time*.02,e.next?(this.nextRing.visible=!0,this.nextRing.position.set(e.next.cx,.1,e.next.cz),this.nextRing.scale.setScalar(e.next.r)):this.nextRing.visible=!1}zoneTimerText(){let t=this.zone;return this.mode==="team"?{label:"TEAM CONQUEST",t:null}:t.next?t.state==="wait"?{label:"NEXT ZONE SHRINKS IN",t:t.t}:{label:"ZONE SHRINKING",t:t.t}:{label:"FINAL ZONE",t:null}}playerControls(){let e=this.player.ctl;if(ui.active)return ui.fill(this,e,this.lastDt||.016);let i={x:-Math.sin(this.camAngle),z:-Math.cos(this.camAngle)},n={x:-i.z,z:i.x},r=(ie.isDown("up")?1:0)-(ie.isDown("down")?1:0),o=(ie.isDown("right")?1:0)-(ie.isDown("left")?1:0);return e.mx=i.x*r+n.x*o,e.mz=i.z*r+n.z*o,Nf.set(ie.mouseX/window.innerWidth*2-1,-(ie.mouseY/window.innerHeight)*2+1),Df.setFromCamera(Nf,this.camera),Df.ray.intersectPlane(Z_,di)&&(e.aimX=di.x,e.aimZ=di.z),e.fire=ie.mouseDown,e.skill[0]=ie.wasPressed("skill1"),e.skill[1]=ie.wasPressed("skill2"),e.skill[2]=ie.wasPressed("skill3"),e.ult=ie.wasPressed("ult"),e.boost=ie.wasPressed("boost"),ie.wheel&&(this.camZoom=fe(this.camZoom+ie.wheel*.08,.7,1.4)),e}update(t){if(t=Math.min(t,.05)*this.timeScale,this.time+=t,this.lastDt=t,this.state==="countdown"){this.countdown-=t;let n=Math.ceil(this.countdown+t),r=Math.ceil(this.countdown);r!==n&&r>0&&r<=3&&(this.emit("countdown",r),this.sfx("ui_click",null,{force:!0})),this.countdown<=0&&(this.state="playing",this.emit("countdown",0),this.sfx("ui_start",null,{force:!0}))}else this.state==="playing"?(this.attract||(this.timeLeft-=t,this.timeLeft<=0&&(this.timeLeft=0,this.endMatch())),this.updateZone(t)):this.state==="ended"&&(this.endT+=t/Math.max(.05,this.timeScale),this.timeScale=Math.max(.25,1-this.endT*.8),this.endT>2.8&&!this.endEmitted&&(this.endEmitted=!0,this.emit("end",this.results())));for(let n=this.timers.length-1;n>=0;n--){let r=this.timers[n];r.t-=t,r.t<=0&&(this.timers.splice(n,1),r.fn())}let e=this.state==="playing";for(let n of this.robots){if(!n.alive){this.state!=="ended"&&(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));continue}let r;n.isPlayer&&this.autoplay?r=e?n.brain.update(t):hc:n.isPlayer?r=e?this.playerControls():hc:r=e?n.brain.update(t):hc,n.isPlayer&&!e&&this.state==="countdown"&&(this.playerControls(),r={...hc,aimX:n.ctl.aimX,aimZ:n.ctl.aimZ}),n.update(t,r)}let i=this.robots;for(let n=0;n<i.length;n++){let r=i[n];if(r.alive)for(let o=n+1;o<i.length;o++){let a=i[o];if(!a.alive)continue;let l=a.pos.x-r.pos.x,c=a.pos.z-r.pos.z,h=Math.hypot(l,c),d=r.radius+a.radius;if(h<d&&h>1e-4){let u=(d-h)/2,f=l/h,g=c/h,x=a.def.mass/(r.def.mass+a.def.mass),m=1-x;r.pos.x-=f*u*2*x,r.pos.z-=g*u*2*x,a.pos.x+=f*u*2*m,a.pos.z+=g*u*2*m}}}for(let n of this.pickups){if(!n.active){n.t-=t,n.t<=0&&(n.active=!0,n.item.visible=!0);continue}n.item.rotation.y+=t*2,n.item.position.y=1.4+Math.sin(this.time*3+n.x)*.2;for(let r of this.robots)if(!(!r.alive||Math.hypot(r.pos.x-n.x,r.pos.z-n.z)>2.2)){if(n.type==="repair"){if(r.hp>=r.maxHp-1)continue;r.heal(mr.repair)}else r.ultCharge=Math.min(100,r.ultCharge+mr.core),r.en=r.maxEn;n.active=!1,n.t=mr.respawn,n.item.visible=!1,this.fx.burst(di.set(n.x,1.5,n.z),20,{color:16777215,color1:n.type==="repair"?5308288:5290239,speed:6,life:.5,size:.8,size1:.1,up:.5}),this.sfx("pickup",r),r.isPlayer&&this.emit("announce",{text:n.type==="repair"?"REPAIR +"+mr.repair:"CORE +"+mr.core+"% ULT",color:n.type==="repair"?"#50ff80":"#50b8ff",small:!0,mini:!0});break}}if(this.conquest&&this.conquest.update(t,this.state==="playing"),this.updateDeployables(t),this.proj.update(t),this.fx.update(t),this.smokeT-=t,this.smokeT<=0){this.smokeT=.12;for(let n of this.map.lights)n.kind==="smoke"&&(Math.hypot(n.x-this.camTarget.x,n.z-this.camTarget.z)>70||this.fx.smoke.spawn(n.x,n.y,n.z,Ut(-.3,.3)+1.2,Ut(1.5,2.5),Ut(-.3,.3)+.6,3.5,2.5,8,j_,Q_,-.1,.2,.35))}this.updateTrueSight(t),this.updateCamera(t),ii.setListener(this.camTarget.x,this.camTarget.z)}canSee(t,e,i=0){return!this.tsOn||this.ts.isVisible(t,e,i)}spottedByAlly(t){let e=this.player;if(!this.tsOn||!e||!e.team||!t.team||t.team===e.team||t.s.cloakT>0)return!1;for(let i of this.robots)if(!(i===e||!i.alive||i.team!==e.team||Math.hypot(i.pos.x-t.pos.x,i.pos.z-t.pos.z)>45)&&this.map.lineOfSight(i.pos.x,i.pos.z,t.pos.x,t.pos.z,1.8))return!0;return!1}updateTrueSight(t){let e=this.player;this.tsOn=!!(this.ts&&xt.gameplay.trueSight),Pn.uVisOn.value=this.tsOn?1:0,this.tsOn?(this.ts.update(e.pos.x,e.pos.z),Pn.uVisStrength.value=xt.gameplay.visDark,Pn.uVisSoft.value=xt.graphics.softVision?.9:0):this.ts&&(this.ts.active=!1);let i=Math.min(1,t*10);for(let n of this.robots){if(!n.alive)continue;let r=n===e||e&&n.team&&n.team===e.team||this.canSee(n.pos.x,n.pos.z,n.radius)||this.spottedByAlly(n)?1:0;n.seen+=(r-n.seen)*i,r===1&&n.seen>.98&&(n.seen=1),n.updateVisibility(e||null,n.seen)}for(let n of this.proj.list)n.mesh.visible=n.owner===e||this.canSee(n.pos.x,n.pos.z,.6);for(let n of this.deployables)n.mesh&&(n.mesh.visible=n.owner===e||this.canSee(n.x,n.z,1));for(let n of this.pickups)n.item.visible=n.active&&this.canSee(n.x,n.z,1)}updateCamera(t){let e,i;if(this.attract){this.followT-=t;let c=this.robots[this.followIdx%this.robots.length];(this.followT<=0||!c.alive)&&(this.followIdx=(this.followIdx+1+Math.floor(Math.random()*3))%this.robots.length,this.followT=10,c=this.robots[this.followIdx]),e=c.pos.x,i=c.pos.z,this.camAngle+=t*.05,this.camZoom=1.15}else{let c=this.player;if(e=c.pos.x,i=c.pos.z,c.alive){let h=fe((c.aim.x-c.pos.x)*.18,-7,7),d=fe((c.aim.z-c.pos.z)*.18,-7,7);e+=h,i+=d}}let n=Math.min(1,t*6);this.camTarget.x+=(e-this.camTarget.x)*n,this.camTarget.z+=(i-this.camTarget.z)*n;let r=40*this.camZoom,o=25*this.camZoom,a=this.fx.shake;this.camera.position.set(this.camTarget.x+Math.sin(this.camAngle)*o+(Math.random()-.5)*a,r+(Math.random()-.5)*a,this.camTarget.z+Math.cos(this.camAngle)*o+(Math.random()-.5)*a),this.camera.lookAt(this.camTarget.x,0,this.camTarget.z),this.sun.position.set(this.camTarget.x+35,70,this.camTarget.z+20),this.sun.target.position.set(this.camTarget.x,0,this.camTarget.z);let l=this.attract?this.robots[this.followIdx%this.robots.length]:this.player;xr.uCutTarget.value.set(l.pos.x,1.5,l.pos.z),xr.uCutCam.value.copy(this.camera.position),xr.uCutR.value=6.5*l.def.scale,xr.uCutOn.value=l.alive?1:0}enableAutoplay(){this.autoplay=!0,this.player.brain=new Po(this.player,this,"hard")}teamWinner(){if(!this.conquest)return null;let t=this.conquest.scores,e=Math.floor(t.blue),i=Math.floor(t.red);return e>i?"blue":i>e?"red":"draw"}endMatch(){if(this.state!=="ended"){if(this.state="ended",this.endT=0,this.conquest){let t=this.teamWinner(),e=t==="draw"?"DRAW":`${gi[t].name} TEAM WINS`;this.emit("announce",{text:e,sub:"",color:t==="draw"?"#ffd24a":gi[t].css})}else this.emit("announce",{text:"MATCH OVER",sub:"",color:"#ffd24a"});this.sfx("zone",null)}}results(){let e=[...this.robots].sort((i,n)=>n.stats.score-i.stats.score||n.stats.kills-i.stats.kills||i.stats.deaths-n.stats.deaths).map((i,n)=>({rank:n+1,name:i.name,cls:i.def,isPlayer:i.isPlayer,team:i.team,...i.stats}));return this.conquest&&(e.teamInfo={winner:this.teamWinner(),blue:Math.floor(this.conquest.scores.blue),red:Math.floor(this.conquest.scores.red),target:this.conquest.target,playerTeam:this.player&&this.player.team}),e}ranking(){let t=(e,i)=>i.stats.score-e.stats.score||i.stats.kills-e.stats.kills;if(this.mode==="team"){let e=this.player?this.player.team:"blue";return[...this.robots].sort((i,n)=>i.team===n.team?t(i,n):i.team===e?-1:1)}return[...this.robots].sort(t)}dispose(){this.ts&&this.ts.dispose(),this.conquest&&this.conquest.dispose(),Pn.uVisOn.value=0,this.proj.clear(),this.fx.clear();for(let t of[...this.deployables])this.removeDeployable(t);for(let t of this.robots)t.destroy();for(let t of this.pickups)this.scene.remove(t.group);this.scene.remove(this.map.group),this.listeners.length=0}},hc={mx:0,mz:0,aimX:0,aimZ:0,fire:!1,skill:[!1,!1,!1],ult:!1,boost:!1},J_=new rt(1,.8,.3),K_=new rt(.7,.1,0),j_=new rt(.35,.33,.32),Q_=new rt(.12,.12,.12);var ce=s=>`<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${s}</svg>`,zf={boost:ce('<path d="M8 30 L22 30 L18 40 L40 18 L26 18 L30 8 Z" fill="currentColor" fill-opacity="0.25"/><path d="M4 22h8M2 30h6M6 38h6"/>'),missiles:ce('<path d="M10 38 L30 18"/><path d="M26 14 l8 0 l0 8"/><path d="M18 40 L34 24"/><path d="M8 28 L24 12"/><circle cx="36" cy="12" r="3" fill="currentColor"/>'),shield:ce('<path d="M24 5 L40 11 V24 C40 34 32 40 24 43 C16 40 8 34 8 24 V11 Z" fill="currentColor" fill-opacity="0.25"/><path d="M24 14 V34M16 22h16"/>'),grenade:ce('<circle cx="24" cy="28" r="12" fill="currentColor" fill-opacity="0.25"/><path d="M20 16 L22 8 h6 l2 8"/><path d="M30 8 L38 4"/><path d="M18 28 h12M24 22 v12"/>'),hyperbeam:ce('<path d="M4 24 H44" stroke-width="8" stroke-opacity="0.4"/><path d="M4 24 H44"/><circle cx="8" cy="24" r="6" fill="currentColor" fill-opacity="0.3"/><path d="M30 14 l6 -6M30 34 l6 6"/>'),slam:ce('<path d="M24 6 V26"/><path d="M16 18 L24 26 L32 18"/><path d="M6 38 Q24 26 42 38"/><path d="M2 44 H46"/>'),fortress:ce('<path d="M8 42 V16 h8 v6 h6 v-6 h4 v6 h6 v-6 h8 v26 Z" fill="currentColor" fill-opacity="0.25"/><path d="M20 42 v-10 h8 v10"/>'),rocket:ce('<path d="M12 36 L30 18 C34 14 40 10 42 6 C38 8 34 14 30 18" /><path d="M30 18 C34 14 40 10 42 6 C38 8 34 14 30 18 L12 36"/><path d="M14 26 L10 30 L18 38 L22 34"/><path d="M8 40 L4 44M12 42 L10 46"/>'),artillery:ce('<circle cx="24" cy="28" r="14"/><circle cx="24" cy="28" r="6"/><path d="M24 4 v10M24 42 v4M6 28 h4M38 28 h4"/><path d="M14 8 l4 6M34 8 l-4 6"/>'),cloak:ce('<path d="M4 24 C12 12 36 12 44 24 C36 36 12 36 4 24 Z" stroke-dasharray="4 4"/><circle cx="24" cy="24" r="6"/><path d="M8 40 L40 8"/>'),mine:ce('<ellipse cx="24" cy="30" rx="14" ry="6" fill="currentColor" fill-opacity="0.25"/><path d="M24 24 V14"/><circle cx="24" cy="11" r="3" fill="currentColor"/><path d="M10 30 L4 36M38 30 L44 36"/>'),blink:ce('<circle cx="12" cy="30" r="5" stroke-dasharray="3 3"/><circle cx="36" cy="16" r="6" fill="currentColor" fill-opacity="0.3"/><path d="M16 27 L30 19" stroke-dasharray="3 4"/><path d="M26 16 L31 19 L28 24"/>'),gauss:ce('<path d="M4 20 H40M4 28 H40"/><path d="M40 16 L46 24 L40 32"/><path d="M10 14 v20M18 14 v20M26 14 v20"/>'),lunge:ce('<path d="M6 40 L36 10"/><path d="M28 8 L38 8 L38 18"/><path d="M4 30 L14 30M10 22 L18 22M18 38 L26 38"/>'),cyclone:ce('<path d="M24 24 m-14 0 a14 14 0 1 1 14 14"/><path d="M24 24 m-7 0 a7 7 0 1 1 7 7"/><path d="M24 38 l-4 -4M24 38 l-4 4"/>'),grapple:ce('<path d="M6 42 L28 20"/><path d="M28 20 L28 8 M28 20 L40 20"/><path d="M28 8 C34 8 40 14 40 20"/><circle cx="6" cy="42" r="3" fill="currentColor"/>'),berserk:ce('<path d="M10 40 L18 22 L14 22 L24 6 L22 20 L28 20 L18 40 Z" fill="currentColor" fill-opacity="0.3"/><path d="M32 12 L40 8M34 22 L44 22M32 32 L40 36"/>'),turret:ce('<path d="M16 26 h14 v-8 h-14 Z" fill="currentColor" fill-opacity="0.3"/><path d="M30 22 H42"/><path d="M23 26 V32 M14 44 L23 32 L32 44 M23 32 V44"/>'),repair:ce('<path d="M18 6 h12 v12 h12 v12 h-12 v12 h-12 v-12 h-12 v-12 h12 Z" fill="currentColor" fill-opacity="0.25"/>'),emp:ce('<circle cx="24" cy="24" r="5" fill="currentColor"/><circle cx="24" cy="24" r="12"/><circle cx="24" cy="24" r="19" stroke-dasharray="5 4"/><path d="M26 4 L20 14 L28 14 L22 24"/>'),drones:ce('<path d="M18 22 L24 16 L30 22 L24 28 Z" fill="currentColor" fill-opacity="0.3"/><path d="M6 12 L10 8 L14 12 L10 16 Z M34 12 L38 8 L42 12 L38 16 Z M6 36 L10 32 L14 36 L10 40 Z M34 36 L38 32 L42 36 L38 40 Z"/>'),napalm:ce('<path d="M24 6 C30 16 36 20 36 30 C36 38 30 43 24 43 C18 43 12 38 12 30 C12 24 16 20 18 14 C20 20 22 22 24 22 C24 16 24 10 24 6 Z" fill="currentColor" fill-opacity="0.3"/><path d="M4 44 H44"/>'),leap:ce('<path d="M6 40 C10 10 34 10 40 34"/><path d="M34 32 L40 36 L44 30"/><path d="M34 42 L46 42M36 38 l-4 -2"/>'),vent:ce('<path d="M6 18 h8 v12 h-8 Z"/><path d="M14 20 L40 8M14 24 L44 24M14 28 L40 40"/><path d="M28 16 q4 8 0 16" />'),meltdown:ce('<circle cx="24" cy="24" r="8" fill="currentColor" fill-opacity="0.4"/><path d="M24 2 v8M24 38 v8M2 24 h8M38 24 h8M8 8 l6 6M34 34 l6 6M40 8 l-6 6M8 40 l6 -6"/>'),bolt:ce('<path d="M6 28 H30" stroke-width="5"/><path d="M34 22 L44 28 L34 34"/>'),gatling:ce('<path d="M6 18 H36M6 24 H40M6 30 H36"/><path d="M40 14 l4 -2M42 24 h4M40 34 l4 2"/>'),rail:ce('<path d="M4 20 H44M4 28 H44"/><path d="M4 24 H44" stroke-opacity="0.5" stroke-width="6"/>'),blade:ce('<path d="M10 38 L38 10 L40 8" stroke-width="5"/><path d="M14 30 L18 34"/><path d="M8 40 L12 36"/>'),orb:ce('<circle cx="30" cy="22" r="10" fill="currentColor" fill-opacity="0.3"/><path d="M4 32 L20 26M8 40 L22 30"/>'),flame:ce('<path d="M6 24 C18 18 26 10 42 12 C34 18 40 22 44 24 C40 26 34 30 42 36 C26 38 18 30 6 24 Z" fill="currentColor" fill-opacity="0.3"/>')};function bs(s){return zf[s]||zf.bolt}var Lt=s=>document.querySelector(s),Qe=new C,uc=class{constructor(t){this.portraits=t,this.root=Lt("#hud"),this.overlay=Lt("#overlay"),this.octx=this.overlay.getContext("2d"),this.mini=Lt("#minimap"),this.mctx=this.mini.getContext("2d"),this.boardT=0,this.game=null,this.announceQueue=[],this.announceT=0,this.hurtFlash=0,this.resize(),window.addEventListener("resize",()=>this.resize())}resize(){let t=Math.min(window.devicePixelRatio||1,2);this.dpr=t,this.overlay.width=window.innerWidth*t,this.overlay.height=window.innerHeight*t}bind(t){this.game=t;let e=t.player;this.root.classList.remove("hidden"),Lt("#pc-portrait").src=this.portraits[e.def.id],Lt("#pc-name").textContent=e.name,Lt("#pc-class").textContent=`${e.def.name} / ${e.def.role}`,Lt("#pc-name").style.color="#fff",Lt("#hud-players").textContent=`${t.robots.length} PLAYERS`;let i=t.mode==="team";if(document.body.classList.toggle("mode-team",i),Lt("#team-bar").classList.toggle("hidden",!i),Lt("#hud-title").classList.toggle("hidden",i),Lt("#cap-status").classList.add("hidden"),i){let o=e.team;Lt("#tb-left .tb-name").textContent=`${gi[o].name} (YOU)`,Lt("#tb-right .tb-name").textContent=gi[o==="blue"?"red":"blue"].name,Lt("#tb-left").className=`tb-side ${o}`,Lt("#tb-right").className=`tb-side ${o==="blue"?"red":"blue"}`,Lt("#tb-target").textContent=`\u76EE\u6A19 ${t.conquest.target}`,this._ptEls=null,Lt("#tb-points").innerHTML=t.conquest.points.map(a=>`<div class="tb-pt" data-id="${a.id}"><i></i><span>${a.id}</span></div>`).join("")}let n=Lt("#skills");n.innerHTML="";let r=[{key:"boost",id:"boost",name:"\u30D6\u30FC\u30B9\u30C8"},{key:"skill1",id:e.def.skills[0].id,name:e.def.skills[0].name},{key:"skill2",id:e.def.skills[1].id,name:e.def.skills[1].name},{key:"skill3",id:e.def.skills[2].id,name:e.def.skills[2].name},{key:"ult",id:e.def.ult.id,name:e.def.ult.name,ult:!0}];ui.build(document.querySelector("#touch-ui"),r.map(o=>({...o,icon:bs(o.id),glow:o.ult?"#ffd24a":pn(e.def.colors.glow)}))),this.slots=r.map(o=>{let a=document.createElement("div");return a.className="skill"+(o.ult?" ult":"")+(o.key==="boost"?" boost":""),a.innerHTML=`<div class="sk-icon">${bs(o.id)}</div><div class="sk-cd"></div><div class="sk-num"></div><div class="sk-key">${Ki(xt.keys[o.key])}</div><div class="sk-name">${o.name}</div>`,a.style.setProperty("--glow",pn(e.def.colors.glow)),n.appendChild(a),{...o,el:a,cd:a.querySelector(".sk-cd"),num:a.querySelector(".sk-num")}}),Lt("#killfeed").innerHTML="",Lt("#announce").innerHTML="",Lt("#respawn").classList.add("hidden"),Lt("#countdown").classList.add("hidden"),t.on((o,a)=>this.onEvent(o,a)),this.buildBoard()}unbind(){this.game=null,this.root.classList.add("hidden"),Lt("#scoreboard").classList.add("hidden"),this.octx.clearRect(0,0,this.overlay.width,this.overlay.height)}onEvent(t,e){let i=this.game;if(t==="kill"){let n=document.createElement("div");n.className="kf";let r=e.killer?`<span class="kf-name ${e.killer.isPlayer?"me":""}" style="--c:${this.robotColor(e.killer)}">${e.killer.name}</span>`:'<span class="kf-name zone">ZONE</span>',o=`<span class="kf-name ${e.victim.isPlayer?"me":""}" style="--c:${this.robotColor(e.victim)}">${e.victim.name}</span>`;n.innerHTML=`${r}<span class="kf-icon">&#9760;</span>${o}`,(e.killer&&e.killer.isPlayer||e.victim.isPlayer)&&n.classList.add("hl");let a=Lt("#killfeed");for(a.prepend(n);a.children.length>6;)a.lastChild.remove();setTimeout(()=>n.classList.add("fade"),6e3),setTimeout(()=>n.remove(),7e3),e.assists.includes(i.player)&&this.announce({text:"ASSIST",sub:`+${is.assist}`,color:"#8fd0ff",small:!0,mini:!0}),this.boardT=0}else if(t==="announce")this.announce(e);else if(t==="conquest"){let n=i.player.team,r=e.point.id;e.team===n?this.announce({text:`\u62E0\u70B9${r}\u3092\u5360\u62E0`,sub:e.contributors.includes(i.player)?"+50":"",color:gi[n].css,small:!0}):e.team?this.announce({text:`\u62E0\u70B9${r}\u3092\u596A\u308F\u308C\u305F`,color:gi[e.team].css,small:!0}):e.prev===n?this.announce({text:`\u62E0\u70B9${r}\u304C\u4E2D\u7ACB\u5316\u3055\u308C\u305F`,color:"#dddddd",small:!0,mini:!0}):this.announce({text:`\u62E0\u70B9${r}\u3092\u4E2D\u7ACB\u5316`,sub:e.contributors.includes(i.player)?"+25":"",color:"#dddddd",small:!0,mini:!0})}else if(t==="playerDeath")Lt("#respawn").classList.remove("hidden"),Lt("#rs-killer").innerHTML=e.killer?`<span style="color:${pn(e.killer.def.colors.glow)}">${e.killer.name}</span> (${e.killer.def.name}) \u306B\u6483\u7834\u3055\u308C\u305F`:"\u30BE\u30FC\u30F3\u306B\u3088\u308A\u5927\u7834",Lt("#rs-penalty").textContent=`${is.death} SCORE`;else if(t==="respawn")Lt("#respawn").classList.add("hidden");else if(t==="countdown"){let n=Lt("#countdown");n.classList.remove("hidden"),n.textContent=e>0?e:"FIGHT!",n.classList.remove("pop"),n.offsetWidth,n.classList.add("pop"),e===0&&setTimeout(()=>n.classList.add("hidden"),900)}else t==="hurt"&&(this.hurtFlash=Math.min(1,this.hurtFlash+e.amount/250))}announce(t){let e=Lt("#announce"),i=document.createElement("div");for(i.className="an"+(t.small?" small":"")+(t.mini?" mini":""),i.innerHTML=`<div class="an-text" style="color:${t.color||"#fff"}">${t.text}</div>${t.sub?`<div class="an-sub">${t.sub}</div>`:""}`,e.appendChild(i);e.children.length>3;)e.firstChild.remove();setTimeout(()=>i.classList.add("out"),t.mini?1200:2e3),setTimeout(()=>i.remove(),t.mini?1700:2600)}robotColor(t){return t.team?gi[t.team].css:pn(t.def.colors.glow)}buildBoard(){let e=this.game.ranking(),i=Lt("#board");i.innerHTML=e.map((n,r)=>{let o=!n.alive;return`<div class="br ${n.isPlayer?"me":""} ${o?"dead":""}">
        <span class="br-rank">${r+1}</span>
        <span class="br-dot" style="background:${this.robotColor(n)}"></span>
        <span class="br-name">${n.name}</span>
        <span class="br-score">${n.stats.score}</span>
        <span class="br-state">${o?Math.ceil(n.respawnT):"&#10003;"}</span>
      </div>`}).join(""),(ie.isDown("scoreboard")||ui.boardOpen)&&this.buildScoreboard()}buildScoreboard(){let e=this.game.ranking();Lt("#sb-body").innerHTML=e.map((i,n)=>`<tr class="${i.isPlayer?"me":""}">
      <td>${n+1}</td><td class="sb-name" style="${i.team?`box-shadow: inset 3px 0 0 ${gi[i.team].css}`:""}"><img src="${this.portraits[i.def.id]}">${i.name}</td><td style="color:${pn(i.def.colors.glow)}">${i.def.name}</td>
      <td>${i.stats.kills}</td><td>${i.stats.deaths}</td><td>${i.stats.assists}</td><td>${Math.round(i.stats.dmg)}</td><td class="sb-score">${i.stats.score}</td></tr>`).join("")}update(t,e){let i=this.game;if(!i)return;let n=i.player,r=i.zoneTimerText();Lt("#hud-zone").innerHTML=r.t===null?r.label:`${r.label}: <b>${gr(r.t)}</b>`,Lt("#hud-zone").classList.toggle("shrinking",i.zone.state==="shrink");let o=i.robots.filter(f=>f.alive).length;Lt("#hud-players").textContent=`${o} / ${i.robots.length} ALIVE`,i.conquest&&this.updateTeamBar(),Lt("#mm-time").textContent=gr(i.timeLeft),Lt("#mm-time").classList.toggle("low",i.timeLeft<30);let a=Math.max(0,n.hp/n.maxHp);Lt("#hp-fill").style.width=`${a*100}%`,Lt("#hp-fill").classList.toggle("low",a<.3),Lt("#hp-shield").style.width=`${Math.min(1,n.s.shield/n.maxHp)*100}%`,Lt("#hp-text").textContent=`${Math.ceil(Math.max(0,n.hp))} / ${n.maxHp}`,Lt("#en-fill").style.width=`${n.en/n.maxEn*100}%`,Lt("#en-text").textContent=`${Math.floor(n.en)}`,Lt("#pc-score").textContent=n.stats.score,Lt("#pc-kda").textContent=`${n.stats.kills} / ${n.stats.deaths} / ${n.stats.assists}`;let l=[];n.s.shield>0&&l.push('<span class="st sh">SHIELD</span>'),n.s.fortressT>0&&l.push('<span class="st ft">FORTRESS</span>'),n.s.berserkT>0&&l.push('<span class="st bz">BERSERK</span>'),n.s.cloakT>0&&l.push('<span class="st ck">CLOAK</span>'),n.s.stunT>0&&l.push('<span class="st bad">STUN</span>'),n.s.slowT>0&&l.push('<span class="st bad">SLOW</span>'),n.s.burnT>0&&l.push('<span class="st bad">BURN</span>'),n.s.invulnT>0&&l.push('<span class="st sh">PROTECT</span>');let c=l.join("");c!==this._sts&&(Lt("#pc-status").innerHTML=c,this._sts=c);for(let f of this.slots){let g=0,x="",m=!0;if(f.key==="boost")g=n.en>=zi.cost?0:1-n.en/zi.cost,m=n.en>=zi.cost;else if(f.key==="ult")g=1-n.ultCharge/100,m=n.ultCharge>=100,x=m?"":`${Math.floor(n.ultCharge)}%`;else{let v=+f.key.slice(-1)-1,T=n.cds[v];g=T/n.def.skills[v].cd,m=T<=0,x=m?"":T.toFixed(T<1?1:0)}f.cd.style.setProperty("--p",`${g*100}%`),f.num.textContent!==x&&(f.num.textContent=x),f.el.classList.toggle("ready",m&&n.alive);let p=ui.buttons[f.key];p&&(p.cd.style.setProperty("--p",`${g*100}%`),p.num.textContent!==x&&(p.num.textContent=x),p.el.classList.toggle("ready",m&&n.alive))}n.alive||(Lt("#rs-time").textContent=Math.max(0,n.respawnT).toFixed(1)),this.boardT-=t,this.boardT<=0&&(this.boardT=.3,this.buildBoard());let h=ie.isDown("scoreboard")||ui.active&&ui.boardOpen;Lt("#scoreboard").classList.toggle("hidden",!h),this.hurtFlash=Math.max(0,this.hurtFlash-t*1.5);let d=n.alive&&Math.hypot(n.pos.x-i.zone.cx,n.pos.z-i.zone.cz)>i.zone.r;Lt("#vignette").style.opacity=Math.max(this.hurtFlash,a<.3&&n.alive?.35+Math.sin(i.time*6)*.1:0),Lt("#zone-warn").classList.toggle("hidden",!d),Lt("#zone-vig").style.opacity=d?1:0;let u=Lt("#crosshair");u.style.transform=`translate(${ie.mouseX}px, ${ie.mouseY}px)`,u.classList.toggle("firing",ie.mouseDown),this.drawOverlay(e),this.drawMinimap()}drawOverlay(t){let e=this.game,i=this.octx,n=this.overlay.width,r=this.overlay.height,o=this.dpr;i.clearRect(0,0,n,r);let a=e.player;if(i.textAlign="center",i.textBaseline="middle",xt.gameplay.nameplates)for(let l of e.robots){if(!l.alive||l!==a&&(l.isCloakedFrom(a)||l.seen<.5)||(Qe.set(l.pos.x,3.6*l.def.scale+l.airY+.6,l.pos.z).project(t),Qe.z>1||Qe.x<-1.1||Qe.x>1.1||Qe.y<-1.1||Qe.y>1.1))continue;let c=(Qe.x*.5+.5)*n,h=(-Qe.y*.5+.5)*r,d=56*o,u=5*o;i.font=`600 ${11*o}px Rajdhani, "Segoe UI", sans-serif`;let f=l.team&&a.team&&l.team===a.team;i.fillStyle=l.isPlayer?"#ffe070":f?"#9fcaff":l.team?"#ffb0b0":"#ffffff",i.strokeStyle="rgba(0,0,0,0.8)",i.lineWidth=3*o,i.strokeText(l.name,c,h-10*o),i.fillText(l.name,c,h-10*o),i.fillStyle="rgba(0,0,0,0.7)",i.fillRect(c-d/2-o,h-o,d+2*o,u+2*o);let g=Math.max(0,l.hp/l.maxHp);i.fillStyle=l.isPlayer?"#4ade80":g>.5?"#e0e6ee":g>.25?"#ffb040":"#ff4040",l.isPlayer||(i.fillStyle=g>.5?"#ff5a5a":g>.25?"#ff9a40":"#ff3030"),f&&(i.fillStyle=g>.3?"#5aa8ff":"#ff9a40"),i.fillRect(c-d/2,h,d*g,u),l.s.shield>0&&(i.fillStyle="#7fd4ff",i.fillRect(c-d/2,h-2*o,d*Math.min(1,l.s.shield/l.maxHp),2*o)),i.fillStyle=this.robotColor(l),i.fillRect(c-d/2-5*o,h-o,3*o,u+2*o)}ui.active&&ui.indicator&&a.alive&&this.drawAimGuide(i,t,a,ui.indicator,n,r);for(let l of e.fx.dmgNumbers){if(Qe.set(l.x,l.y,l.z).project(t),Qe.z>1)continue;let c=(Qe.x*.5+.5)*n,h=(-Qe.y*.5+.5)*r,d=l.t<.6?1:1-(l.t-.6)/.3,u=l.t<.1?1+(.1-l.t)*5:1;i.globalAlpha=Math.max(0,d),i.font=`700 ${(l.big?22:15)*u*o}px Rajdhani, "Segoe UI", sans-serif`,i.lineWidth=3*o,i.strokeStyle="rgba(0,0,0,0.85)",i.strokeText(l.text,c,h),i.fillStyle=l.color,i.fillText(l.text,c,h)}if(i.globalAlpha=1,a.alive&&!e.conquest){let l=e.zone;if(Math.hypot(a.pos.x-l.cx,a.pos.z-l.cz)>l.r-8){Qe.set(l.cx,0,l.cz).project(t);let h=n/2,d=r/2,u=(Qe.x*.5+.5)*n-h,f=(-Qe.y*.5+.5)*r-d,g=Math.hypot(u,f)||1;u/=g,f/=g;let x=Math.min(n,r)*.3;i.save(),i.translate(h+u*x,d+f*x),i.rotate(Math.atan2(f,u)),i.fillStyle="rgba(90,176,255,0.9)",i.beginPath(),i.moveTo(16*o,0),i.lineTo(-8*o,-10*o),i.lineTo(-8*o,10*o),i.fill(),i.restore()}}}drawAimGuide(t,e,i,n,r,o){let a=this.dpr,l=(f,g)=>(Qe.set(f,.2,g).project(e),[(Qe.x*.5+.5)*r,(-Qe.y*.5+.5)*o]),c=(f,g,x)=>{t.beginPath();for(let m=0;m<=48;m++){let p=m/48*Math.PI*2,[v,T]=l(f+Math.cos(p)*x,g+Math.sin(p)*x);m?t.lineTo(v,T):t.moveTo(v,T)}},h=n.cancel?"255,80,80":"120,210,255";t.save(),t.lineWidth=2*a;let d=i.pos.x,u=i.pos.z;if(n.r&&(c(d,u,n.r),t.strokeStyle=`rgba(${h},0.45)`,t.stroke()),n.t==="point"){let f=d+n.dirX*n.dist,g=u+n.dirZ*n.dist;c(f,g,n.a||2),t.fillStyle=`rgba(${h},0.22)`,t.fill(),t.strokeStyle=`rgba(${h},0.9)`,t.stroke();let[x,m]=l(d,u),[p,v]=l(f,g);t.setLineDash([6*a,6*a]),t.beginPath(),t.moveTo(x,m),t.lineTo(p,v),t.stroke()}else if(n.t==="line"){let f=n.w||1,g=n.r||14,x=-n.dirZ,m=n.dirX,p=[[d+x*f,u+m*f],[d+n.dirX*g+x*f,u+n.dirZ*g+m*f],[d+n.dirX*g-x*f,u+n.dirZ*g-m*f],[d-x*f,u-m*f]].map(([v,T])=>l(v,T));t.beginPath(),p.forEach(([v,T],M)=>M?t.lineTo(v,T):t.moveTo(v,T)),t.closePath(),t.fillStyle=`rgba(${h},0.22)`,t.fill(),t.strokeStyle=`rgba(${h},0.9)`,t.stroke()}if(n.cancel){let[f,g]=l(d,u);t.font=`700 ${14*a}px "Noto Sans JP", sans-serif`,t.fillStyle="#ff6060",t.textAlign="center",t.fillText("\u30AD\u30E3\u30F3\u30BB\u30EB",f,g-60*a)}t.restore()}updateTeamBar(){let t=this.game,e=t.conquest,i=t.player,n=i.team,r=n==="blue"?"red":"blue",o=Math.floor(e.scores[n]),a=Math.floor(e.scores[r]);Lt("#tb-left .tb-score").textContent=o,Lt("#tb-right .tb-score").textContent=a,Lt("#tb-left .tb-fill").style.width=`${o/e.target*100}%`,Lt("#tb-right .tb-fill").style.width=`${a/e.target*100}%`;for(let h of e.points){let u=(this._ptEls?this._ptEls[h.id]:null)||document.querySelector(`.tb-pt[data-id="${h.id}"]`);this._ptEls||(this._ptEls={}),this._ptEls[h.id]=u,u.className=`tb-pt ${h.owner||"neutral"}${h.contested?" contested":""}`;let f=h.v>0?"blue":h.v<0?"red":"neutral",g=u.firstElementChild;g.style.height=`${Math.abs(h.v)}%`,g.className=f}let l=Lt("#cap-status"),c=i.alive?e.pointAt(i.pos.x,i.pos.z):null;if(c){let h=n==="blue"?c.v:-c.v,d;c.contested?d=`\u62E0\u70B9${c.id} \u4E89\u596A\u4E2D\uFF01`:c.owner===n&&h>=100?d=`\u62E0\u70B9${c.id} \u78BA\u4FDD\u4E2D`:d=`\u62E0\u70B9${c.id} \u5360\u62E0\u4E2D ${Math.max(0,Math.round(h))}%`,l.textContent=d,l.className=c.contested?"contested":""}else l.classList.add("hidden")}drawMinimap(){let t=this.game,e=this.mctx,i=this.mini.width,n=i/240*.98;e.clearRect(0,0,i,i),e.save(),e.beginPath(),e.arc(i/2,i/2,i/2-1,0,Math.PI*2),e.clip(),e.fillStyle="#0b1118",e.fillRect(0,0,i,i),e.translate(i/2,i/2),e.rotate(t.camAngle),e.drawImage(t.map.minimapCanvas,-120*n,-120*n,240*n,240*n);let r=t.zone;if(t.conquest)for(let a of t.conquest.points){let l=a.owner?gi[a.owner].css:"#dddddd";e.fillStyle=l+"44",e.strokeStyle=a.contested&&Math.sin(t.time*12)>0?"#ffffff":l,e.lineWidth=2,e.beginPath(),e.arc(a.x*n,a.z*n,a.r*n+2,0,Math.PI*2),e.fill(),e.stroke(),e.save(),e.translate(a.x*n,a.z*n),e.rotate(-t.camAngle),e.fillStyle="#fff",e.font="700 11px Orbitron, Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(a.id,0,1),e.restore()}else e.fillStyle="rgba(30,70,160,0.35)",e.beginPath(),e.rect(-i,-i,i*2,i*2),e.arc(r.cx*n,r.cz*n,r.r*n,0,Math.PI*2,!0),e.fill(),e.strokeStyle="#5ab0ff",e.lineWidth=2,e.beginPath(),e.arc(r.cx*n,r.cz*n,r.r*n,0,Math.PI*2),e.stroke();r.next&&!t.conquest&&(e.strokeStyle="rgba(255,255,255,0.8)",e.lineWidth=1,e.setLineDash([4,3]),e.beginPath(),e.arc(r.next.cx*n,r.next.cz*n,r.next.r*n,0,Math.PI*2),e.stroke(),e.setLineDash([]));for(let a of t.pickups)a.active&&(e.fillStyle=a.type==="repair"?"#50ff80":"#50b8ff",e.fillRect(a.x*n-2,a.z*n-2,4,4));let o=t.player;for(let a of t.robots)!a.alive||a===o||a.isCloakedFrom(o)||a.seen<.5||(e.fillStyle=this.robotColor(a),e.strokeStyle="#000",e.lineWidth=1,e.beginPath(),e.arc(a.pos.x*n,a.pos.z*n,3.2,0,Math.PI*2),e.fill(),e.stroke());o.alive&&(e.save(),e.translate(o.pos.x*n,o.pos.z*n),e.rotate(-o.aimYaw+Math.PI),e.fillStyle="#ffe070",e.strokeStyle="#000",e.beginPath(),e.moveTo(0,-7),e.lineTo(5,5),e.lineTo(0,2),e.lineTo(-5,5),e.closePath(),e.fill(),e.stroke(),e.restore()),e.restore(),e.strokeStyle="rgba(120,190,255,0.7)",e.lineWidth=2,e.beginPath(),e.arc(i/2,i/2,i/2-1,0,Math.PI*2),e.stroke()}};var Wt=s=>document.querySelector(s),We=s=>[...document.querySelectorAll(s)];function kf(s){let t=new gs({antialias:!0,alpha:!0,preserveDrawingBuffer:!0});t.setSize(192,192),t.setPixelRatio(1),t.toneMapping=un,t.outputColorSpace=Re;let e=new _i;e.environment=s,e.environmentIntensity=.6,e.add(new Yn(12571903,3156e3,1.5));let i=new hn(16777215,3);i.position.set(3,5,6),e.add(i);let n=new hn(8956671,3);n.position.set(-4,3,-5),e.add(n);let r=new Ne(30,1,.1,100),o={};for(let a of Rn){let l=new vs(a);l.update(.016,{speedNorm:0,moving:!1,moveYaw:0,aimYaw:.5,boost:!1,airborne:!1}),l.root.rotation.y=.5,e.add(l.root);let c=(l.hipY+1.6)*a.scale;r.position.set(2.6*a.scale,c+.6,5.6*a.scale),r.lookAt(0,c-.55*a.scale,0),t.render(e,r),o[a.id]=t.domElement.toDataURL("image/png"),e.remove(l.root),l.dispose()}return t.dispose(),t.forceContextLoss(),o}var qh=class{constructor(t,e){this.canvas=t,this.renderer=new gs({canvas:t,antialias:!0,alpha:!0}),this.renderer.toneMapping=un,this.renderer.outputColorSpace=Re,this.renderer.shadowMap.enabled=!0,this.scene=new _i,this.scene.environment=e,this.scene.environmentIntensity=.5,this.scene.add(new Yn(12571903,3156e3,1.2));let i=new hn(16777215,3);i.position.set(4,8,6),i.castShadow=!0,i.shadow.mapSize.set(1024,1024),this.scene.add(i);let n=new hn(6728447,4);n.position.set(-5,4,-6),this.scene.add(n);let r=new ot(new ke(3.2,3.5,.4,48),new ae({color:2764340,metalness:.8,roughness:.35}));r.position.y=-.2,r.receiveShadow=!0,this.scene.add(r),this.ring=new ot(new us(3.3,.05,8,64),new Qt({color:5227519})),this.ring.rotation.x=Math.PI/2,this.ring.position.y=.02,this.scene.add(this.ring);let o=new eo(40,40,2245734,1714746);o.position.y=-.4,this.scene.add(o),this.cam=new Ne(32,1,.1,100),this.model=null,this.rot=.6,this.t=0,this.dragging=!1,t.style.touchAction="none",t.addEventListener("pointerdown",a=>{this.dragging=!0,this.lx=a.clientX,t.setPointerCapture(a.pointerId)}),t.addEventListener("pointerup",()=>{this.dragging=!1}),t.addEventListener("pointercancel",()=>{this.dragging=!1}),t.addEventListener("pointermove",a=>{this.dragging&&(this.rot+=(a.clientX-this.lx)*.01,this.lx=a.clientX)})}setClass(t){this.model&&(this.scene.remove(this.model.root),this.model.dispose()),this.def=t,this.model=new vs(t),this.model.root.traverse(e=>{e.isMesh&&(e.castShadow=!0)}),this.scene.add(this.model.root),this.ring.material.color.set(t.colors.glow)}render(t){let e=this.canvas.clientWidth,i=this.canvas.clientHeight;if(!(!e||!i)){if((this.canvas.width!==Math.floor(e*devicePixelRatio)||this.canvas.height!==Math.floor(i*devicePixelRatio))&&(this.renderer.setPixelRatio(devicePixelRatio),this.renderer.setSize(e,i,!1),this.cam.aspect=e/i,this.cam.updateProjectionMatrix()),this.t+=t,this.dragging||(this.rot+=t*.4),this.model){let n=this.def.scale;this.model.update(t,{speedNorm:0,moving:!1,moveYaw:this.rot,aimYaw:this.rot,boost:!1,airborne:!1}),this.model.legsYaw=this.rot,this.model.root.rotation.y=this.rot,this.model.inner.position.y=Math.sin(this.t*1.5)*.04,this.cam.position.set(0,3.2*n+.8,13.5*n),this.cam.lookAt(0,1.8*n,0)}this.renderer.render(this.scene,this.cam)}}},dc=class{constructor(t,e,i){this.env=t,this.portraits=e,this.h=i,this.screen=null,this.prevScreen="title",this.hangar=new qh(Wt("#hangar-canvas"),t),this.buildTitle(),this.buildHangar(),this.buildSettings(),this.buildHowto(),this.bindSounds()}show(t){this.screen&&this.screen!==t&&t==="settings"&&(this.prevScreen=this.screen),this.screen=t,We(".screen").forEach(e=>e.classList.toggle("active",e.id===`screen-${t}`)),t==="hangar"&&this.refreshHangar(),t==="settings"&&this.refreshSettings(),t==="howto"&&this.buildHowto()}hideAll(){this.screen=null,We(".screen").forEach(t=>t.classList.remove("active"))}bindSounds(){document.addEventListener("mouseover",t=>{let e=t.target.closest("button, .cls-card, .opt");e&&e!==this._hov&&(this._hov=e,ii.play("ui_hover"))}),document.addEventListener("click",t=>{ii.init();let e=t.target.closest("button, .cls-card, .opt");e&&ii.play(e.classList.contains("back")?"ui_back":"ui_click")})}buildTitle(){Wt("#title-logo").innerHTML=Qd.split(" ").map((t,e)=>`<span class="${e?"b":"a"}">${t}</span>`).join(""),Wt("#btn-play").onclick=()=>this.show("hangar"),Wt("#btn-settings").onclick=()=>this.show("settings"),Wt("#btn-howto").onclick=()=>this.show("howto"),Wt("#btn-credits").onclick=()=>this.show("credits"),We(".btn-back-title").forEach(t=>{t.onclick=()=>this.show("title")})}buildHangar(){let t=Wt("#cls-list");t.innerHTML=Rn.map(n=>`<div class="cls-card" data-id="${n.id}" style="--glow:${pn(n.colors.glow)}">
      <img src="${this.portraits[n.id]}"><div><div class="cls-name">${n.name}</div><div class="cls-role">${n.role}</div></div></div>`).join(""),We(".cls-card").forEach(n=>{n.onclick=()=>{xt.player.classId=n.dataset.id,ci(),this.refreshHangar()}});let e=Wt("#pilot-name");e.value=xt.player.name,e.addEventListener("input",()=>{let n=e.value.toUpperCase().replace(/[^A-Z0-9_\-]/g,"").slice(0,14);n!==e.value&&(e.value=n),xt.player.name=n||"PLAYER",ci()}),e.addEventListener("keydown",n=>n.stopPropagation());let i=Wt("#opt-bots");i.value=xt.player.bots,i.oninput=()=>{xt.player.bots=+i.value,Wt("#opt-bots-v").textContent=i.value,ci()},Wt("#opt-mode").innerHTML=[["br","\u30D0\u30C8\u30EB\u30ED\u30A4\u30E4\u30EB"],["team","\u30C1\u30FC\u30E0\u5236\u5727"]].map(([n,r])=>`<div class="opt" data-v="${n}">${r}</div>`).join(""),We("#opt-mode .opt").forEach(n=>{n.onclick=()=>{xt.player.mode=n.dataset.v,ci(),this.refreshHangar()}}),Wt("#opt-diff").innerHTML=Object.entries(ns).map(([n,r])=>`<div class="opt" data-v="${n}">${r.label}</div>`).join(""),We("#opt-diff .opt").forEach(n=>{n.onclick=()=>{xt.player.difficulty=n.dataset.v,ci(),this.refreshHangar()}}),Wt("#opt-time").innerHTML=ef.map(n=>`<div class="opt" data-v="${n}">${n/60}\u5206</div>`).join(""),We("#opt-time .opt").forEach(n=>{n.onclick=()=>{xt.player.duration=+n.dataset.v,ci(),this.refreshHangar()}}),Wt("#btn-launch").onclick=()=>this.h.startMatch(),Wt("#btn-hangar-back").onclick=()=>this.show("title")}refreshHangar(){let t=$l[xt.player.classId]||Rn[0];We(".cls-card").forEach(r=>r.classList.toggle("sel",r.dataset.id===t.id)),We("#opt-diff .opt").forEach(r=>r.classList.toggle("sel",r.dataset.v===xt.player.difficulty)),We("#opt-mode .opt").forEach(r=>r.classList.toggle("sel",r.dataset.v===xt.player.mode)),Wt("#opt-bots-l").textContent=xt.player.mode==="team"?"AI\u6A5F\u6570":"\u6575\u6A5F\u6570",We("#opt-time .opt").forEach(r=>r.classList.toggle("sel",+r.dataset.v===xt.player.duration)),Wt("#opt-bots").value=xt.player.bots,Wt("#opt-bots-v").textContent=xt.player.bots,Wt("#pilot-name").value=xt.player.name,this.hangar.def!==t&&this.hangar.setClass(t);let e=pn(t.colors.glow),i=(r,o)=>`<div class="stat"><span>${r}</span><div class="stat-bar">${[1,2,3,4,5].map(a=>`<i class="${a<=o?"on":""}"></i>`).join("")}</div></div>`,n=["skill1","skill2","skill3"];Wt("#cls-detail").style.setProperty("--glow",e),Wt("#cls-detail").innerHTML=`
      <div class="cd-head"><div class="cd-name">${t.name}</div><div class="cd-role">${t.role}</div></div>
      <div class="cd-desc">${t.desc}</div>
      <div class="cd-stats">
        ${i("\u706B\u529B",t.stats.firepower)}${i("\u88C5\u7532",t.stats.armor)}${i("\u6A5F\u52D5",t.stats.mobility)}${i("\u5C04\u7A0B",t.stats.range)}
        <div class="cd-nums">HP <b>${t.hp}</b>\u3000SPEED <b>${t.speed}</b>\u3000EN <b>${t.energy}</b></div>
      </div>
      <div class="cd-skill"><div class="cd-ic">${bs(t.primary.kind)}</div><div><div class="cd-sn"><span class="key">LMB</span>${t.primary.name}</div><div class="cd-sd">\u901A\u5E38\u653B\u6483\uFF08\u5DE6\u30AF\u30EA\u30C3\u30AF\u9577\u62BC\u3057\u3067\u9023\u5C04\uFF09</div></div></div>
      ${t.skills.map((r,o)=>`<div class="cd-skill"><div class="cd-ic">${bs(r.id)}</div><div><div class="cd-sn"><span class="key">${Ki(xt.keys[n[o]])}</span>${r.name}<span class="cd-cd">CD ${r.cd}s</span></div><div class="cd-sd">${r.desc}</div></div></div>`).join("")}
      <div class="cd-skill ult"><div class="cd-ic">${bs(t.ult.id)}</div><div><div class="cd-sn"><span class="key">${Ki(xt.keys.ult)}</span>${t.ult.name}<span class="cd-cd">ULT</span></div><div class="cd-sd">${t.ult.desc}</div></div></div>`}buildSettings(){We(".set-tab").forEach(t=>{t.onclick=()=>{We(".set-tab").forEach(e=>e.classList.toggle("sel",e===t)),We(".set-page").forEach(e=>e.classList.toggle("active",e.id==="set-"+t.dataset.tab))}}),Wt("#btn-set-back").onclick=()=>{ci(),this.h.settingsClosed(),this.show(this.prevScreen==="settings"?"title":this.prevScreen)},Wt("#btn-set-reset").onclick=()=>{Tf(),this.refreshSettings(),this.h.settingsChanged()}}refreshSettings(){let t=xt,e=t.graphics,i=t.audio,n=t.gameplay,r=(h,d,u,f)=>`<div class="row"><label>${h}</label><div class="opts">${d.map(([g,x])=>`<div class="opt ${g===u?"sel":""}" data-fn="${f}" data-v="${g}">${x}</div>`).join("")}</div></div>`,o=(h,d,u,f,g,x,m,p)=>`<div class="row" title="${p||""}"><label>${h}</label><input type="range" data-key="${d}" min="${f}" max="${g}" step="${x}" value="${u}"><span class="val" data-for="${d}">${m(u)}</span></div>`,a=(h,d,u,f)=>`<div class="row" title="${f||""}"><label>${h}</label><div class="toggle ${u?"on":""}" data-key="${d}"><i></i></div></div>`,l=h=>`${Math.round(h*100)}%`;Wt("#set-graphics").innerHTML=r("\u63CF\u753B\u54C1\u8CEA",[["low","\u4F4E"],["medium","\u4E2D"],["high","\u9AD8"]],e.quality,"quality")+a("\u5F71","graphics.shadows",e.shadows,"\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0\u306E\u5F71\u3092\u63CF\u753B\u3059\u308B")+a("\u30D6\u30EB\u30FC\u30E0\uFF08\u767A\u5149\uFF09","graphics.bloom",e.bloom,"\u30D3\u30FC\u30E0\u3084\u7206\u767A\u306E\u767A\u5149\u8868\u73FE")+o("\u89E3\u50CF\u5EA6\u30B9\u30B1\u30FC\u30EB","graphics.resolution",e.resolution,.5,1,.05,l,"\u63CF\u753B\u89E3\u50CF\u5EA6\u3002\u4E0B\u3052\u308B\u3068\u8EFD\u304F\u306A\u308B")+o("\u30D1\u30FC\u30C6\u30A3\u30AF\u30EB\u91CF","graphics.particles",e.particles,.25,1,.05,l,"\u7206\u767A\u3084\u708E\u306A\u3069\u306E\u7C92\u5B50\u91CF")+a("\u8996\u754C\u5883\u754C\u306E\u307C\u304B\u3057","graphics.softVision",e.softVision,"TrueSight\u306E\u898B\u3048\u308B/\u898B\u3048\u306A\u3044\u5883\u754C\u3092\u67D4\u3089\u304B\u304F\u3059\u308B"),Wt("#set-audio").innerHTML=o("\u30DE\u30B9\u30BF\u30FC\u97F3\u91CF","audio.master",i.master,0,1,.05,l)+o("BGM\u97F3\u91CF","audio.music",i.music,0,1,.05,l)+o("\u52B9\u679C\u97F3\u97F3\u91CF","audio.sfx",i.sfx,0,1,.05,l),Wt("#set-gameplay").innerHTML=a("\u753B\u9762\u306E\u63FA\u308C","gameplay.shake",n.shake,"\u7206\u767A\u6642\u306A\u3069\u306E\u30AB\u30E1\u30E9\u30B7\u30A7\u30A4\u30AF")+a("\u30C0\u30E1\u30FC\u30B8\u6570\u5024\u8868\u793A","gameplay.damageNumbers",n.damageNumbers)+a("\u30CD\u30FC\u30E0\u30D7\u30EC\u30FC\u30C8\u8868\u793A","gameplay.nameplates",n.nameplates,"\u6A5F\u4F53\u4E0A\u90E8\u306E\u540D\u524D\u3068HP\u30D0\u30FC")+a("TrueSight\uFF08\u8996\u754C\u30B7\u30B9\u30C6\u30E0\uFF09","gameplay.trueSight",n.trueSight,"\u81EA\u6A5F\u304B\u3089\u898B\u3048\u306A\u3044\u7BC4\u56F2\u3092\u6697\u304F\u3057\u3001\u8996\u754C\u5916\u306E\u6575\u30FB\u5F3E\u3092\u96A0\u3059")+o("\u8996\u754C\u5916\u306E\u6697\u3055","gameplay.visDark",n.visDark,.4,1,.05,l,"TrueSight\u3067\u898B\u3048\u306A\u3044\u7BC4\u56F2\u3092\u3069\u308C\u3060\u3051\u6697\u304F\u3059\u308B\u304B")+o("\u30AB\u30E1\u30E9\u8DDD\u96E2","gameplay.camZoom",n.camZoom,.7,1.4,.05,h=>`${Math.round(h*100)}%`,"\u30B2\u30FC\u30E0\u4E2D\u306F\u30DE\u30A6\u30B9\u30DB\u30A4\u30FC\u30EB\u3067\u3082\u5909\u66F4\u53EF\u80FD");let c=t.touch;Wt("#set-controls").innerHTML=r("\u64CD\u4F5C\u30E2\u30FC\u30C9",[["auto","\u81EA\u52D5"],["pc","PC"],["touch","\u30BF\u30C3\u30C1"]],c.mode,"tmode")+o("\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u306E\u5927\u304D\u3055","touch.scale",c.scale,.7,1.4,.05,l,"\u30B9\u30DE\u30DB\u64CD\u4F5C\u6642\u306E\u4EEE\u60F3\u30B9\u30C6\u30A3\u30C3\u30AF\u30FB\u30B9\u30AD\u30EB\u30DC\u30BF\u30F3\u306E\u5927\u304D\u3055")+o("\u30BF\u30C3\u30C1\u30DC\u30BF\u30F3\u306E\u4E0D\u900F\u660E\u5EA6","touch.opacity",c.opacity,.3,1,.05,l,"\u30B9\u30DE\u30DB\u64CD\u4F5C\u6642\u306E\u4EEE\u60F3\u30D1\u30C3\u30C9\u306E\u6FC3\u3055")+'<div class="keys-note">\u30DC\u30BF\u30F3\u3092\u30AF\u30EA\u30C3\u30AF\u5F8C\u3001\u5272\u308A\u5F53\u3066\u305F\u3044\u30AD\u30FC\u3092\u62BC\u3057\u3066\u304F\u3060\u3055\u3044\uFF08ESC\u3067\u30AD\u30E3\u30F3\u30BB\u30EB\uFF09\u3002\u7167\u6E96\uFF1D\u30DE\u30A6\u30B9\u3001\u901A\u5E38\u653B\u6483\uFF1D\u5DE6\u30AF\u30EA\u30C3\u30AF\u3002</div>'+Object.keys(Io.keys).map(h=>`<div class="row"><label>${wf[h]}</label><button class="keybtn" data-k="${h}">${Ki(t.keys[h])}</button></div>`).join(""),We('#screen-settings .opt[data-fn="quality"]').forEach(h=>{h.onclick=()=>{let d=h.dataset.v;e.quality=d,d==="low"&&Object.assign(e,{shadows:!1,bloom:!1,resolution:.75,particles:.5}),d==="medium"&&Object.assign(e,{shadows:!0,bloom:!1,resolution:.9,particles:.75}),d==="high"&&Object.assign(e,{shadows:!0,bloom:!0,resolution:1,particles:1}),ci(),this.refreshSettings(),this.h.settingsChanged()}}),We('#screen-settings .opt[data-fn="tmode"]').forEach(h=>{h.onclick=()=>{xt.touch.mode=h.dataset.v,ci(),ui.applyMode(),this.refreshSettings(),this.h.settingsChanged()}}),We("#screen-settings input[type=range]").forEach(h=>{h.oninput=()=>{let[d,u]=h.dataset.key.split(".");xt[d][u]=+h.value;let f=Wt(`.val[data-for="${h.dataset.key}"]`);f.textContent=u==="camZoom"?`${Math.round(h.value*100)}%`:`${Math.round(h.value*100)}%`,ci(),this.h.settingsChanged()}}),We("#screen-settings .toggle").forEach(h=>{h.onclick=()=>{let[d,u]=h.dataset.key.split(".");xt[d][u]=!xt[d][u],h.classList.toggle("on",xt[d][u]),ci(),this.h.settingsChanged()}}),We("#screen-settings .keybtn").forEach(h=>{h.onclick=()=>{We(".keybtn").forEach(d=>d.classList.remove("wait")),h.classList.add("wait"),h.textContent="...",ie.captureHandler=d=>{if(ie.captureHandler=null,h.classList.remove("wait"),d!=="Escape"){let u=h.dataset.k;for(let f of Object.keys(xt.keys))f!==u&&xt.keys[f]===d&&(xt.keys[f]=xt.keys[u]);xt.keys[u]=d,ci(),ii.play("ui_click")}this.refreshSettings()}}})}buildHowto(){let t=xt.keys;Wt("#howto-body").innerHTML=`
      <div class="ht-col">
        <h3>\u64CD\u4F5C\u65B9\u6CD5</h3>
        <table class="ht-keys">
          <tr><td>${["up","left","down","right"].map(e=>`<span class="key">${Ki(t[e])}</span>`).join("")}</td><td>\u79FB\u52D5\uFF08\u753B\u9762\u57FA\u6E96\uFF09</td></tr>
          <tr><td><span class="key">\u30DE\u30A6\u30B9</span></td><td>\u7167\u6E96\uFF08\u6A5F\u4F53\u4E0A\u534A\u8EAB\u304C\u30AB\u30FC\u30BD\u30EB\u65B9\u5411\u3092\u5411\u304F\uFF09</td></tr>
          <tr><td><span class="key">\u5DE6\u30AF\u30EA\u30C3\u30AF</span></td><td>\u901A\u5E38\u653B\u6483\uFF08\u9577\u62BC\u3057\u3067\u9023\u5C04\uFF09</td></tr>
          <tr><td>${["skill1","skill2","skill3"].map(e=>`<span class="key">${Ki(t[e])}</span>`).join("")}</td><td>\u30B9\u30AD\u30EB1\u301C3</td></tr>
          <tr><td><span class="key">${Ki(t.ult)}</span></td><td>\u30A6\u30EB\u30C8\uFF08\u30B2\u30FC\u30B8100%\u3067\u4F7F\u7528\u53EF\u80FD\uFF09</td></tr>
          <tr><td><span class="key">${Ki(t.boost)}</span></td><td>\u30D6\u30FC\u30B9\u30C8\uFF08\u79FB\u52D5\u65B9\u5411\u3078\u9AD8\u901F\u30C0\u30C3\u30B7\u30E5\uFF0FEN\u6D88\u8CBB\uFF09</td></tr>
          <tr><td><span class="key">${Ki(t.scoreboard)}</span></td><td>\u30B9\u30B3\u30A2\u30DC\u30FC\u30C9\u8868\u793A</td></tr>
          <tr><td><span class="key">\u30DB\u30A4\u30FC\u30EB</span></td><td>\u30AB\u30E1\u30E9\u8DDD\u96E2</td></tr>
          <tr><td><span class="key">ESC</span></td><td>\u30DD\u30FC\u30BA\u30E1\u30CB\u30E5\u30FC</td></tr>
        </table>
        <p class="ht-note">\u203B\u30AD\u30FC\u5272\u308A\u5F53\u3066\u306F\u8A2D\u5B9A\u753B\u9762\u304B\u3089\u5909\u66F4\u3067\u304D\u307E\u3059\u3002</p>
        <h3 style="margin-top:14px">\u30B9\u30DE\u30DB\uFF08\u30BF\u30C3\u30C1\uFF09\u64CD\u4F5C</h3>
        <table class="ht-keys">
          <tr><td><span class="key">\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF</span></td><td>\u79FB\u52D5\uFF08\u753B\u9762\u5DE6\u5074\u306E\u3069\u3053\u3092\u89E6\u3063\u3066\u3082\u51FA\u73FE\uFF09</td></tr>
          <tr><td><span class="key">\u53F3\u30B9\u30C6\u30A3\u30C3\u30AF</span></td><td>\u5012\u3057\u305F\u65B9\u5411\u3078\u901A\u5E38\u653B\u6483\uFF08\u9023\u5C04\uFF09\u3002\u30BF\u30C3\u30D7\u3067\u6700\u5BC4\u308A\u306E\u6575\u3078\u81EA\u52D5\u7167\u6E96\u5C04\u6483</td></tr>
          <tr><td><span class="key">\u30B9\u30AD\u30EB/\u30A6\u30EB\u30C8</span></td><td>\u62BC\u3057\u305F\u307E\u307E\u6483\u3061\u305F\u3044\u65B9\u5411\u3078\u30D5\u30EA\u30C3\u30AF\u3057\u3066\u96E2\u3059\uFF08\u8DDD\u96E2\u3067\u7740\u5F3E\u4F4D\u7F6E\u3092\u8ABF\u6574\uFF09\u3002\u30BF\u30C3\u30D7\u306E\u307F\u306F\u81EA\u52D5\u7167\u6E96\u3002\u30DC\u30BF\u30F3\u4E0A\u306B\u623B\u3057\u3066\u96E2\u3059\u3068\u30AD\u30E3\u30F3\u30BB\u30EB</td></tr>
          <tr><td><span class="key">\u30D6\u30FC\u30B9\u30C8</span></td><td>\u5DE6\u30B9\u30C6\u30A3\u30C3\u30AF\u306E\u65B9\u5411\u3078\u30C0\u30C3\u30B7\u30E5</td></tr>
        </table>
        <p class="ht-note">\u203BPC\u3068\u30B9\u30DE\u30DB\u306F\u81EA\u52D5\u3067\u5207\u308A\u66FF\u308F\u308A\u307E\u3059\uFF08\u8A2D\u5B9A\u306E\u300C\u64CD\u4F5C\u300D\u30BF\u30D6\u3067\u56FA\u5B9A\u3082\u53EF\u80FD\uFF09\u3002</p>
      </div>
      <div class="ht-col">
        <h3>\u30EB\u30FC\u30EB</h3>
        <ul>
          <li>\u5168\u54E1\u304C\u6575\u306E\u30BD\u30ED\u30FB\u30D0\u30C8\u30EB\u30ED\u30A4\u30E4\u30EB\u3002\u5236\u9650\u6642\u9593\u7D42\u4E86\u6642\u306B<b>\u30B9\u30B3\u30A2\u6700\u4E0A\u4F4D</b>\u304C\u52DD\u8005\u3002</li>
          <li>\u6483\u7834 <b class="pos">+100</b>\uFF0F\u30A2\u30B7\u30B9\u30C8 <b class="pos">+30</b>\uFF0F\u88AB\u6483\u7834 <b class="neg">-50</b></li>
          <li>\u6483\u7834\u3055\u308C\u3066\u3082<b>5\u79D2\u5F8C\u306B\u4F55\u5EA6\u3067\u3082\u5FA9\u6D3B</b>\uFF08\u5FA9\u6D3B\u76F4\u5F8C2\u79D2\u9593\u306F\u7121\u6575\uFF09\u3002</li>
          <li>\u6642\u9593\u7D4C\u904E\u3067<b>\u5B89\u5168\u5730\u5E2F\uFF08\u9752\u3044\u58C1\uFF09\u304C\u7E2E\u5C0F</b>\u3002\u5916\u5074\u306B\u3044\u308B\u3068\u7D99\u7D9A\u30C0\u30E1\u30FC\u30B8\u3002\u767D\u3044\u5186\u304C\u6B21\u306E\u5B89\u5168\u5730\u5E2F\u3002</li>
          <li>\u30A6\u30EB\u30C8\u30B2\u30FC\u30B8\u306F\u6642\u9593\u7D4C\u904E\u30FB\u4E0E\u30C0\u30E1\u30FC\u30B8\u30FB\u6483\u7834\u3067\u6E9C\u307E\u308B\u3002</li>
          <li>\u30DE\u30C3\u30D7\u4E0A\u306E\u88DC\u7D66\u30DD\u30C3\u30C9\uFF1A<span style="color:#50ff80">\u7DD1\uFF1D\u4FEE\u7406\uFF08HP\u56DE\u5FA9\uFF09</span>\u3001<span style="color:#50b8ff">\u9752\uFF1D\u30B3\u30A2\uFF08\u30A6\u30EB\u30C8+30%\u30FBEN\u5168\u5FEB\uFF09</span></li>
          <li>\u5EFA\u7269\u306E\u9670\u306B\u5165\u308B\u3068\u624B\u524D\u306E\u5EFA\u7269\u306F\u81EA\u52D5\u3067\u900F\u904E\u8868\u793A\u3055\u308C\u308B\u3002</li>
        </ul>
        <h3 style="margin-top:14px">\u30C1\u30FC\u30E0\u5236\u5727\u30E2\u30FC\u30C9</h3>
        <ul>
          <li><b style="color:#4a9dff">\u9752\u30C1\u30FC\u30E0</b>\u3068<b style="color:#ff5050">\u8D64\u30C1\u30FC\u30E0</b>\u306E\u5BFE\u6226\uFF08\u3042\u306A\u305F\u306F\u9752\uFF09\u3002\u5B89\u5168\u5730\u5E2F\u306E\u7E2E\u5C0F\u306F\u306A\u3057\u3002</li>
          <li>\u62E0\u70B9 <b>A\u301CE</b> \u306E\u5186\u306E\u4E2D\u306B\u7559\u307E\u308B\u3068\u30B2\u30FC\u30B8\u304C\u9032\u307F\u3001\u6E80\u30BF\u30F3\u3067\u5360\u62E0\u3002\u5473\u65B9\u304C\u591A\u3044\u307B\u3069\u901F\u3044\u3002\u6575\u5473\u65B9\u304C\u540C\u6642\u306B\u3044\u308B\u3068\u4E89\u596A\u4E2D\u3067\u505C\u6B62\u3002\u6575\u306E\u62E0\u70B9\u306F\u307E\u305A\u4E2D\u7ACB\u306B\u623B\u3057\u3066\u304B\u3089\u596A\u3046\u3002</li>
          <li>\u5360\u62E0\u4E2D\u306E\u62E0\u70B91\u3064\u306B\u3064\u304D\u6BCE\u79D21\u70B9\u3002<b>\u76EE\u6A19\u70B9\u306B\u5148\u306B\u5230\u9054</b>\u3059\u308B\u304B\u3001\u6642\u9593\u5207\u308C\u6642\u306B\u591A\u3044\u65B9\u304C\u52DD\u5229\u3002</li>
          <li>\u6483\u7834\u306F\u30C1\u30FC\u30E0\u5F97\u70B9\u306B\u5F71\u97FF\u3057\u306A\u3044\uFF08\u76F8\u624B\u3092\u62E0\u70B9\u304B\u3089\u8FFD\u3044\u51FA\u3059\u624B\u6BB5\uFF09\u3002\u5473\u65B9\u3078\u306E\u653B\u6483\u306F\u7121\u52B9\u3002\u5FA9\u6D3B\u306F\u81EA\u9663\u306E\u51FA\u6483\u5730\u70B9\u304B\u3089\u3002</li>
          <li>\u5473\u65B9\u304C\u898B\u3066\u3044\u308B\u6575\u306F\u3001\u81EA\u5206\u304B\u3089\u898B\u3048\u306A\u304F\u3066\u3082\u8868\u793A\u3055\u308C\u308B\u3002</li>
          <li><b>TrueSight</b>\uFF1A\u81EA\u6A5F\u304B\u3089\u898B\u3048\u306A\u3044\u5834\u6240\u306F\u6697\u304F\u306A\u308A\u3001\u305D\u3053\u306B\u3044\u308B\u6575\u30FB\u5F3E\u30FB\u8A2D\u7F6E\u7269\u306F\u8868\u793A\u3055\u308C\u306A\u3044\uFF08\u30DF\u30CB\u30DE\u30C3\u30D7\u306B\u3082\u51FA\u306A\u3044\uFF09\u3002\u9AD8\u30552m\u4EE5\u4E0B\u306E\u6728\u7BB1\u3084\u67F5\u306F\u8D8A\u3057\u3066\u898B\u3048\u308B\u3002\u8A2D\u5B9A\u3067\u7121\u52B9\u5316\u53EF\u80FD\u3002</li>
        </ul>
      </div>`}showResults(t,e){let i=t.find(o=>o.isPlayer),n=i?i.rank:0,r=t.teamInfo;if(r){let o=r.winner===r.playerTeam,a=r.winner==="draw";Wt("#res-title").textContent=a?"DRAW":o?"VICTORY":"DEFEAT",Wt("#res-title").className=a?"top":o?"win":"lose",Wt("#res-team").innerHTML=`<div class="res-team"><div class="rt blue"><small>BLUE</small>${r.blue}</div><div>-</div><div class="rt red"><small>RED</small>${r.red}</div></div>`,Wt("#res-sub").textContent=`\u30C1\u30FC\u30E0\u5236\u5727 \uFF0F \u76EE\u6A19 ${r.target} \uFF0F \u500B\u4EBA\u30B9\u30B3\u30A2 ${t.length}\u6A5F\u4E2D ${n}\u4F4D \uFF0F ${ns[e.difficulty].label} \uFF0F ${gr(e.duration)}`}else{let o=n===1?"VICTORY":n<=3?`TOP ${n}`:`RANK #${n}`;Wt("#res-title").textContent=o,Wt("#res-title").className=n===1?"win":n<=3?"top":"",Wt("#res-team").innerHTML="",Wt("#res-sub").textContent=`${t.length}\u6A5F\u4E2D ${n}\u4F4D \uFF0F ${ns[e.difficulty].label} \uFF0F ${gr(e.duration)}`}i&&(Wt("#res-me").innerHTML=`
        <img src="${this.portraits[i.cls.id]}">
        <div class="rm-stats">
          <div><span>SCORE</span><b>${i.score}</b></div>
          <div><span>KILLS</span><b>${i.kills}</b></div>
          <div><span>DEATHS</span><b>${i.deaths}</b></div>
          <div><span>ASSISTS</span><b>${i.assists}</b></div>
          <div><span>DAMAGE</span><b>${Math.round(i.dmg)}</b></div>
          <div><span>BEST STREAK</span><b>${i.bestStreak}</b></div>
        </div>`),Wt("#res-body").innerHTML=t.map(o=>`<tr class="${o.isPlayer?"me":""} ${o.rank===1?"first":""}">
      <td>${o.rank}</td><td class="sb-name" style="${o.team?`box-shadow: inset 3px 0 0 ${gi[o.team].css}`:""}"><img src="${this.portraits[o.cls.id]}">${o.name}</td><td style="color:${pn(o.cls.colors.glow)}">${o.cls.name}</td>
      <td>${o.kills}</td><td>${o.deaths}</td><td>${o.assists}</td><td>${Math.round(o.dmg)}</td><td class="sb-score">${o.score}</td></tr>`).join(""),this.show("results")}renderHangar(t){this.screen==="hangar"&&this.hangar.render(t)}};var vi=s=>document.querySelector(s);function Uo(s,t){vi("#load-bar i").style.width=`${s*100}%`,t&&(vi("#load-text").textContent=t)}var fc=()=>new Promise(s=>setTimeout(s,16));async function ty(){Uo(.05,"\u30EC\u30F3\u30C0\u30E9\u30FC\u521D\u671F\u5316\u4E2D..."),await fc();let s=new gs({antialias:!0,powerPreference:"high-performance"});s.shadowMap.enabled=!0,s.shadowMap.type=Ya,s.toneMapping=un,s.toneMappingExposure=1.15,s.outputColorSpace=Re,vi("#gl-wrap").appendChild(s.domElement);let e=new hr(s).fromScene(new Vl,.04).texture;Uo(.2,"\u30DE\u30C3\u30D7\u751F\u6210\u4E2D..."),await fc();let i=new Ql;Uo(.6,"\u6A5F\u4F53\u30C7\u30FC\u30BF\u69CB\u7BC9\u4E2D..."),await fc();let n=kf(e);Uo(.8,"\u30B7\u30B9\u30C6\u30E0\u8D77\u52D5\u4E2D..."),await fc();let r=new Xl(s),o=new ql(new _i,new Ne),a=new pr(new _t(window.innerWidth,window.innerHeight),.55,.45,.82);r.addPass(o),r.addPass(a),r.addPass(new Yl);let l=new uc(n),c=null,h="title",d=null;function u(){let R=Math.min(window.devicePixelRatio||1,2)*xt.graphics.resolution;s.setPixelRatio(R),s.setSize(window.innerWidth,window.innerHeight),r.setPixelRatio(R),r.setSize(window.innerWidth,window.innerHeight),s.shadowMap.enabled=xt.graphics.shadows,c&&(c.applyShadowSettings(),c.camera.aspect=window.innerWidth/window.innerHeight,c.camera.updateProjectionMatrix(),c.fx.setScale(window.innerHeight*R,c.camera.fov),c.attract||(c.camZoom=xt.gameplay.camZoom),c.scene.traverse(y=>{y.material&&y.material.needsUpdate!==void 0&&!Array.isArray(y.material)&&(y.material.needsUpdate=!0)})),ii.applyVolumes(),ui.layout()}function f(R){c&&c.dispose(),c=R,o.scene=R.scene,o.camera=R.camera,u()}function g(){l.unbind(),ie.enabled=!1,document.body.classList.remove("ingame"),f(new No(s,i,e,{attract:!0,duration:99999})),h="title",p.show("title"),ii.setMusic("title")}function x(){ii.init();let R=xt.player;d={playerClass:R.classId,playerName:R.name||"PLAYER",bots:R.bots,difficulty:R.difficulty,duration:R.duration,mode:R.mode},ci();let y=new No(s,i,e,d);f(y),l.bind(y),y.on((E,P)=>{E==="end"&&(h="results",ie.enabled=!1,document.body.classList.remove("ingame"),l.unbind(),ii.setMusic("results"),p.showResults(P,d))}),p.hideAll(),h="match",ie.enabled=!0,document.body.classList.add("ingame"),ii.setMusic("battle")}function m(R){R?(h="paused",p.show("pause"),document.body.classList.remove("ingame"),ie.enabled=!1):(h="match",p.hideAll(),document.body.classList.add("ingame"),ie.enabled=!0)}let p=new dc(e,n,{startMatch:x,settingsChanged:u,settingsClosed:()=>{h==="paused"&&p.show("pause")}});vi("#btn-resume").onclick=()=>m(!1),window.addEventListener("steel-pause",()=>{h==="match"&&m(!0)});let v=async()=>{try{document.fullscreenElement?await document.exitFullscreen():(await document.documentElement.requestFullscreen(),screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape").catch(()=>{}))}catch{}setTimeout(u,300)};vi("#btn-fullscreen").onclick=v,vi("#btn-pause-fs").onclick=v,vi("#btn-pause-settings").onclick=()=>p.show("settings"),vi("#btn-pause-restart").onclick=()=>x(),vi("#btn-pause-quit").onclick=()=>g(),vi("#btn-res-again").onclick=()=>x(),vi("#btn-res-hangar").onclick=()=>{g(),p.show("hangar")},vi("#btn-res-title").onclick=()=>g(),window.addEventListener("resize",u),window.addEventListener("pointerdown",()=>ii.init()),window.addEventListener("keydown",()=>ii.init()),g(),Uo(1,""),vi("#loading").classList.add("done"),setTimeout(()=>vi("#loading").remove(),800);let T=performance.now(),M=0,w=0;function S(R){requestAnimationFrame(S);let y=Math.min(.1,(R-T)/1e3);T=R,ie.codePressed("Escape")&&!ie.captureHandler&&(h==="match"?m(!0):h==="paused"&&p.screen==="pause"&&m(!1)),c&&h!=="paused"&&c.update(y),c&&(xt.graphics.bloom?r.render(y):s.render(c.scene,c.camera)),(h==="match"||h==="paused")&&l.update(h==="paused"?0:y,c.camera),p.renderHangar(y),ie.endFrame(),w++,M+=y,M>1&&(window.__fps=w/M,w=0,M=0)}requestAnimationFrame(S),window.__steel={get game(){return c},startMatch:x,startTitle:g}}ty().catch(s=>{console.error(s);let t=document.querySelector("#load-text");t&&(t.textContent="\u30A8\u30E9\u30FC: "+s.message)});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
