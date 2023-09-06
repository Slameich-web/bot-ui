import {createElement, FunctionComponent, useEffect, useRef, useState} from "react"

import styles from "./styles.module.css"

function rgbToHex(rgbString: string) {
    const [stringR, stringG, stringB] = rgbString
        .replace('rgb(', '')
        .replace(')', '')
        .replace(' ', '')
        .split(',')

    const r = parseInt(stringR)
    const g = parseInt(stringG)
    const b = parseInt(stringB)

    // Проверка на валидность значений RGB (0-255)
    if (r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        throw new Error('Значения RGB должны быть в диапазоне от 0 до 255.');
    }

    // Преобразование компонентов RGB в HEX
    const componentToHex = (c: number) => {
        const hex = c.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    const hexR = componentToHex(r);
    const hexG = componentToHex(g);
    const hexB = componentToHex(b);

    return `#${hexR}${hexG}${hexB}`;
}

export const Calculator: FunctionComponent = () => {
    const [baseColor, setBaseColor] = useState<string>("#000000")
    const [blendColor, setBlendColor] = useState<string>("#000000")
    const [resultColor, setResultColor] = useState<string>("")

    const palleteRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (palleteRef.current) {
            setResultColor(rgbToHex(window.getComputedStyle(palleteRef.current).backgroundColor))
        }
    }, [baseColor, blendColor]);

    return (
        <div>
            <div><input type="color" value={baseColor} onChange={(event) => setBaseColor(event.target.value)}/></div>
            <div><input type="color" value={blendColor} onChange={(event) => setBlendColor(event.target.value)}/></div>
            <div ref={palleteRef} style={{width: "450px", height: "450px", backgroundColor: `color-mix(in hsl, ${baseColor}, ${blendColor})`}}></div>
            <h2>{resultColor}</h2>
        </div>
    )
}