const stringToColor = (str: string) => {
    let hash = 0

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash)
        hash = hash & hash
    }

    // hsl(0, 0%, 0%) first parameter is hue, second is saturation, third is lightness
    return `hsl(${hash % 360}, ${50}%, ${60}%)`
}

export default stringToColor
