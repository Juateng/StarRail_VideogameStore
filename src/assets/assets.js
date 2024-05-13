import logo from './star_rail.png'
import shopping_cart from './carrito-de-compras.png'
import halo_inf_case from './halo_infinite_popular.jpg'
import elden_ring_case from './elden_ring_prod.jpg'
import doom_eternal_case from './doom_eternal_popular.jpg'
import facebook from './facebook_icon.png'
import linkedin from './linkedin_icon.png'
import twitter from './twitter_icon.png'


export const assets = {
    logo,
    shopping_cart,
    facebook,
    linkedin,
    twitter
}

export const prod_list = [
    {
        _id: "1",
        nombre: "Halo Infinite",
        image: halo_inf_case,
        plataforma: 'XBOX',
        precio: 500
    },
    {
        _id: "2",
        nombre: "Elden Ring",
        image: elden_ring_case,
        plataforma: 'XBOX',
        precio: 1000
    }, {
        _id: "3",
        nombre: "Doom Eternal",
        image: doom_eternal_case,
        plataforma: 'XBOX',
        precio: 800
    }
]