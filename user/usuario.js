let alunos = localStorage.getItem('id')
let students = []
let html = '';

const fotoAleatoria = () => `./0000${Math.floor(Math.random() * 99)}.jpg`

const fetchStudents = () => {
	fetch('./../js/alunos.json').then(res => res.json())
	.then(json =>{
		students.push(json);

        json.map(aluno =>{

            if(btoa(aluno.name) == alunos){
                console.log(btoa(aluno.name))
            html = 
                `
                <div class="aluno flex justify-center flex-col">
        
                    <div class="foto py-8">
                        <img src="${fotoAleatoria()}" onerror="this.onerror=null; this.src='./000044.jpg'" 
                            draggable="false" class="block mx-auto border-2 border-white w-36 h-56 object-cover" />
                    </div>
                    
                    <div class="flex flex-col justify-center">
            
                        <div class="w-full">
                            <input type="text" value="${aluno.name}" readonly class="px-5 w-full text-center text-2xl tracking-widest" />
                        </div>
                        
                        <div class="w-full">
                            <span>Profissão:</span>
                            <input type="text" readonly value="SEXCOACH" class="px-5 w-full text-center font-black text-3xl py-2 tracking-widest" />
                        </div>
        
                        <div class="profdoc flex">
                                <div>
                                    <span>Documento:</span>
                                    <input type="text" readonly value="${aluno.document}" class="px-2 text-center text-xl tracking-widest sm:text-2xl" />
                                </div>
        
                                <div>
                                    <span>CPMES Nº</span>
                                    <input type="text" readonly value="${aluno.cpm}" class="px-5 text-center text-2xl tracking-widest" />
                                </div>
        
                                <div class="-translate-y-2">
                                    <span>Emissão:</span>
                                    <input type="text" readonly value="${aluno.emission}" class="px-5 text-center text-2xl tracking-widest" />
        
                                    <span>Vencimento:</span>
                                    <input type="text" readonly value="${aluno.expiration}" class="px-5 text-center text-2xl tracking-widest" />
                                </div>
        
                                <div>
                                    <span class="!text-white !text-xs -translate-y-3 !text-center !block">
                                        CÓDIGO DE VERIFICAÇÃO <br /><br />
                                    </span>
                                    <img src="../img/code.png" draggable="false">
                                    <span class="!text-white !text-xs -translate-y-3 !text-center !block">Local de Emissão: Piracicaba-SP</span>
                                </div>
                            </div>
        
                            </div>
                            
                            </div>
                            <div class="relative w-1/2 -translate-y-24">
        
                                <span>Apoio:<span>
                                <img src="../img/abra.png" draggable="false" class="block w-28"/>
                            </div>
                            </div>
                `}
            })
            document.querySelector('.carteira section').innerHTML = html
	})
    
}
fetchStudents()


