const buttonShare = document.querySelector('#buttonshare')

function shareText() {
  console.log("click") 
  
  if (navigator.share) {
    console.log('share api ok')

    navigator.share({
      title: 'web.dev',
      text: 'Teste de compartilhamento de texto',
      utl: 'https://web.dev/'
    })
      .then(() => console.log('Compartilhado com sucesso'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    console.log("share api not found")
  }
}

buttonShare.addEventListener('click', shareText)
