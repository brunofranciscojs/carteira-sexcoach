let alunos = [JSON.parse(localStorage.getItem('aluno'))]

let html = '';

const fotoAleatoria = () => `./0000${Math.floor(Math.random() * 99)+10}.jpg`

alunos.forEach(aluno =>{
    html = 
        `
        <div class="aluno flex justify-center flex-col">

            <div class="foto py-8">
                <img src="${fotoAleatoria()}" 
                    draggable="false" class="block mx-auto border-2 border-white w-36 h-56 object-cover" />
            </div>
            
            <div class="flex flex-col justify-center">
    
                <div class="w-full">
                    <input type="text" disabled value="${aluno.name}" class="px-5 w-full text-center text-2xl tracking-widest" />
                </div>
                
                <div class="w-full">
                    <span>Profissão:</span>
                    <input type="text" disabled value="SEXCOACH" class="px-5 w-full text-center font-black text-3xl py-2 tracking-widest" />
                </div>

                <div class="profdoc flex">
                        <div>
                            <span>Documento:</span>
                            <input type="text" disabled value="${aluno.document}" class="px-2 text-center text-xl tracking-widest sm:text-2xl" />
                        </div>

                        <div>
                            <span>CPMES Nº</span>
                            <input type="text" disabled value="${aluno.cpm}" class="px-5 text-center text-2xl tracking-widest" />
                        </div>

                        <div class="-translate-y-2">
                            <span>Emissão:</span>
                            <input type="text" disabled value="${aluno.emission}" class="px-5 text-center text-2xl tracking-widest" />

                            <span>Vencimento:</span>
                            <input type="text" disabled value="${aluno.expiration}" class="px-5 text-center text-2xl tracking-widest" />
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
        `
    })
    document.querySelector('.carteira section').innerHTML = html
