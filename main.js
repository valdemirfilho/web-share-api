const buttonShare = document.querySelector('#buttonshare')

async function shareTextAndImg() {
  console.log("click") 
  
  const blob = await fetch('./img/cat.jpg').then(r=>r.blob())
  
  const file = new File([blob], "cat.jpg", {type: "image/jpeg"})

  const filesArray = [file]
  
  if (navigator.canShare && navigator.canShare({files: filesArray })) {
    console.log('share api ok')

    navigator.share({
      files: filesArray,
      title: 'web.dev',
      text: 'Teste de compartilhamento de texto',
      url: 'https://web.dev/'
    })
      .then(() => console.log('Compartilhado com sucesso'))
      .catch((error) => console.log('Error sharing', error));
  } else {
    console.log("share api not found")
  }
}

buttonShare.addEventListener('click', shareTextAndImg)
