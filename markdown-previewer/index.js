let updatePreview = () => {
    let previewText = document.getElementById("preview");
    let inputText = document.getElementById("editor").value;
    let markedHTML = marked.parse(inputText, { breaks: true });

    previewText.innerHTML = markedHTML;       
}

let setDefault = () => {
    let defaultText = `\
# H1 Heading

## H2 Sub heading

[Link](https://freecodecamp.org/)

\`In-line code\`

- List item

> Block quote

**Bolded text**

\`\`\`
let example = () => {
console.log('Multi-line code block')
}
\`\`\`

![Image](https://styles.redditmedia.com/t5_2u048/styles/communityIcon_hsdahrtzqqx31.png)
`;
    let editorField = document.getElementById("editor");
    let previewText = document.getElementById('preview');

    editorField.value = defaultText;
    previewText.innerHTML = marked.parse(defaultText);
}