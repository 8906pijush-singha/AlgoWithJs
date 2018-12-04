


function node(data){
    this.data=data;
    this.next=null;
}

function singly(){
    this._length=0;
    this.head=null;
}
var i, j;

loop1:
for (i = 0; i < 3; i++) {      //The first for statement is labeled "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   //The second for statement is labeled "loop2"
      if (i === 1 && j === 1) {
         continue loop2;
      }
      console.log('i = ' + i + ', j = ' + j);
   }
}