let nomeHeroi = "Lancelot";
let quantidadeExp = 10001;

if(quantidadeExp <= 1000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Ferro.`);
}else if(quantidadeExp >= 1001 && quantidadeExp <= 2000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Bronze.`);
}else if(quantidadeExp >= 2001 && quantidadeExp <= 5000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Prata.`);
}else if(quantidadeExp >= 5001 && quantidadeExp <= 7000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Ouro.`);
}else if(quantidadeExp >= 7001 && quantidadeExp <= 8000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Platina.`);
}else if(quantidadeExp >= 8001 && quantidadeExp <= 10000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Imortal.`);
}else if(quantidadeExp > 10000) {
	console.log(`O Herói de nome ${nomeHeroi} está no nível de Lendário.`);
}