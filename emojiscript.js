const $emoji = document.getElementById('element')
const emojis = []


//this line will generate images
for (let i=127793; i < 	127853; i++){
    emojis.push(`
    <p style="text-align: center;">
        <span class="emojis" style="font-size: 5rem;">&#${i}</span><br>
        <code class="code" style="font-size:16px">${i}</code>
        </p>`)
}
$emoji.innerHTML=emojis.join('')



