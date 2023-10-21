let l=parseInt(prompt("Enter the number"))
let v=[]


for(i=0; i<l; i++){
	v[i]=parseInt(prompt("Enter the "+(i+1)+" value"))
}


document.write("Gien array =[ "+v+" ]<br><br>")

let a=v.map(function(e){
	if(true){
		var b=Math.floor(3.14*e*e)
	}

	return b
})

document.write("Area of the circle =[ "+a+" ]")