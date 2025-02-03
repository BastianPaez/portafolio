export type Project = {
    id:number
    name: string
    link: string
    img: string
    description: string,
    technologies: string[]
}

type Technologies = string;

export const projects : Project[]= [
    {id: 1,
    name: 'Eventipass',
    link: 'https://eventipass.cl/',
    img:'eventipass', 
    description: 'Trabajo realizado en wordpress para una productora de eventos, en esta plataforma se realiza la venta de tickets online con QR y ademas posee un punto de venta físico para la venta presencial de tickets y souvenirs', 
    technologies: ['wordpress', 'woocommerce']}
]

export const technologies: Technologies[] = ['html', 'css', 'tailwindcss', 'javascript', 'typescript', 'react', 'node', 'postgresql', 'git', 'github']

