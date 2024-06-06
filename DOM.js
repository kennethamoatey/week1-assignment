

/*document.getElementById('heading1').innerHTML="Hello world"

let nameChange=document.getElementsByTagName('h1')[0]
nameChange.innerHTML='Change Text'*/

/*document.body.innerHTML=" Hello world"
document.write('hello world')

document.getElementById('heading1').innerHTML="kenneth amoatey"

let nameChange =document.getElementsByTagName('h2')[0]
 nameChange.innerHTML='HELLO WORLD'

let className=document.getElementsByClassName('heading4')[0]
className.innerHTML='Happy world'

let head=document.getElementById('head')
function clickMe(){
    head.innerHTML='cute puppy'
    alert('button clicked')
}*/
class Car{
    constructor(door,steering,engine,seats){
        this.door=door
        this.steering=steering
        this.engine=engine
        this.seats=seats

    }
}
class Truck extends Car{
    getFeatures(){
        return this.door+" "+' large bucket'
    }
}
const User1=new Truck('two','one','one','two')
console.log(User1.getFeatures())
console.log(User1)
