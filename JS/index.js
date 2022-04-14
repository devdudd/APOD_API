$('#picture').hide()
$('#video').hide()
$('#submit').click(function (event) {
    event.preventDefault()
    const dataValue = $('#data').val()
    returnValue(dataValue);
})
function returnValue (dataValue){
    $.ajax({
        type: 'GET',
        url: `https://api.nasa.gov/planetary/apod?api_key=SsqImHr9fHpBXf7uOiYJNo3o7bmTpH64NWn48bhd&date=${dataValue}`,
        success: function (resposta){
            if (resposta.media_type == 'image'){
                $('#picture').show()
                $('#video').hide()
                $('#title').text(resposta.title)
                $('#picture').attr('src', resposta.url)
                $('#explanation').text(resposta.explanation)
            } else if (resposta.media_type == 'video'){
                $('#video').show()
                $('#picture').hide()
                $('#title').text(resposta.title)
                $('#video').attr('src', resposta.url)
                $('#explanation').text(resposta.explanation)
            }
        }
    })
}
 