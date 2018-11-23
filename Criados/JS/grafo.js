/*  Estruturas de Dados em Javascript
	Grafos */
	
class Grafo{
	constructor(numVertices){
		this.numVertices = numVertices;
		this.AdjList = new Map(); 
	}
	
	addVertice(v){
		this.AdjList.set(v,[]);
	}
	
	addBorda(v, w){
		this.AdjList.get(v).push(w);
		this.AdjList.get(w).push(v);
	}
	
	imprimirGrafo(){ //Não sei se vai ficar assim devido ao uso da biblioteca gráfica no Blockly
		var obter_chaves = this.AdjList.keys();
		
		for(var i of get_keys){
			var obter_val = this.AdjList.get(i);
			var conc = "";
			
			for(var j of obter_val){
				conc += j + " ";
				
				console.log(i + " ->" + conc); //Impressão propriamente dita
			}
		}
	}
}