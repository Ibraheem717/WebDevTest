

addDescription = (val, desc) => {
    const textareaValue = document.getElementById(val).value;
    document.getElementById(desc).innerHTML = textareaValue
}

changeVideo = (loc, vid) => {
    const source = document.getElementById(loc)
    source.src = URL.createObjectURL(document.getElementById(vid).files[0])

}