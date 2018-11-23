/*	Estruturas de Dados em Javascript
 Arvore de Busca */

 class No
{ 
    constructor(d) 
    { 
        this.d = d; 
        this.left = null; 
        this.right = null; 
    } 
} 

class BinaryTree 
{ 
    constructor() 
    { 
        this.root = null; 
    } 
  
	getRaiz(){
		return this.root;
	}
	
	procurar(no, d){
		if(!no) 
			return null; 
		else{
			if (no.d===d)
				return no;
			else(no.d!=d){
				return this.search(no.left, d);  
				return this.search(no.right, d);
			}
		}
	}
	
	emOrder(no){
		if(no) 
		{ 
			this.emOrder(no.left); 
			console.log(no.d);  //Impressão propriamente dita
			this.emOrder(no.right); 
		} 
	}
	
	preOrder(no) { 
		if(no) { 
			console.log(no.d); 
			this.preOrder(no.left); 
			this.preOrder(no.right); 
		} 
	}

	postOrder(no) { 
		if(no) { 
			this.postOrder(no.left); 
			this.postOrder(no.right); 
			console.log(no.d); 
		} 
	} 
  
	inserir(d){
		var newno = new no(d); 
        if(!this.root) 
			this.root = newno; 
		else
			this.insertno(this.root, newno);
	}
	
	insertno(no, newno) { 	//Tá certo isso? REVER
		if(no.d) {  
			if(!no.left) 
				no.left = newno; 
			else
				this.insertno(no.left, newno);  
		} 
		else{ 
			if(!no.right) 
				no.right = newno; 
			else
				this.insertno(no.right,newno); 
		} 
	}
	
	remove(d) { 
		this.root = this.removeno(this.root, d); 
	} 
  
	removeno(no, key) { 
		if(no === null) 
			return null; 
		else if(key < no.d) { 
			no.left = this.removeno(no.left, key); 
			return no; 
		} 
  
		else if(key > no.d) 
		{ 
			no.right = this.removeno(no.right, key); 
			return no; 
		} 
  
		else{ 
			if(no.left === null && no.right === null) 
			{ 
				no = null; 
				return no; 
			} 
  
			if(!no.left) { 
				no = no.right; 
				return no; 
			} 
          
			else if(!no.right){ 
				no = no.left; 
				return no; 
			} 
  
			var aux = this.findMinno(no.right); 
			no.d = aux.d; 
	  
			no.right = this.removeno(no.right, aux.d); 
			return no; 
		} 
	}
} 