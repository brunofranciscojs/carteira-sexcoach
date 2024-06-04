document.querySelector('input[type="text"]').addEventListener('input', (e) =>{
		document.querySelector('div[results]').innerHTML = busca(e.target.value).join('')

		if(e.target.value.length < 1){
			document.querySelector('div[results]').innerHTML = ''
		} 
})

document.querySelector('input[type="tel"]').addEventListener('change', (e) =>{
	if (e.target.value.includes(cpmes(e.target.value.replace(/[-.]/g, '')))){
		entrar(e)
	}
})

let students = []
const fetchStudents = () => {
	fetch('./js/alunos.json').then(res => res.json())
	.then(json =>{
		students = json;
	})
}
fetchStudents()

const cpmes = (cpm) =>{
	const busca = students.filter(aluno =>{
		const numero = aluno.cpm.replace(/[-.]/g, '')
		return numero.includes(cpm.replace(/[-.]/g, ''))
	})
	return busca.map( aluno => aluno.cpm )
} 

const busca = (name) => {
	const busca = students.filter(aluno =>{
		const nome = aluno.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
		return nome.includes(name.toLowerCase())
	})
	return busca.map( aluno => `<span onclick="entrar(event)">${aluno.name}</span>` )
}

const entrar = (e) =>{
	students.filter(aluno =>{
	if( e.target.tagName === 'SPAN' && e.target.innerText == aluno.name){

			localStorage.setItem('id',btoa(aluno.name))
			setTimeout(() =>{
				window.location = `./user/index.html?id=${btoa(aluno.name)}`
			},200)

		}else if(e.target.tagName === 'INPUT'){
			window.location = `./user?=${e.target.value.replace(/[-.]/g, '')}`
		}
	})
}

