const buttonShare = document.querySelector('#buttonshare')

async function shareTextAndImg() {
  console.log("click") 
  
  const response = await fetch('img/cat.jpg')
  const blob = await response.blob()
  
  const file = new File([blob], "cat.jpg", {type: "image/jpeg"})

  const filesArray = [file]
  
  if (navigator.canShare && navigator.canShare({files: filesArray })) {
    console.log('file share api ok')
    navigator.share({
      files: filesArray,
      title: 'web.dev',
      text: 'Teste de compartilhamento de texto',
      url: 'https://pedalaki.tk'
    })
      .then(() => console.log('Compartilhado com sucesso'))
      .catch((error) => console.log('Error sharing', error));

  } else if (navigator.share) {
    console.log('Share api OK')
    navigator.share({
      title: 'web.dev',
      text: 'Teste de compartilhamento de texto',
      url: 'https://pedalaki.tk'
    })
      .then(() => console.log('Compartilhado com sucesso'))
      .catch((error) => console.log('Error sharing', error));

  } else {
    console.log("share api not found")
  }
}

buttonShare.addEventListener('click', shareTextAndImg)
