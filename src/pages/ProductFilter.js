import { useState, useEffect } from 'react';

const products = [
    {
        name: "Kameko",
        price: 1538
    }, {
        name: "Grata",
        price: 2515
    }, {
        name: "Linnell",
        price: 1016
    }, {
        name: "Hunfredo",
        price: 3282
    }, {
        name: "Brannon",
        price: 4621
    }, {
        name: "Liz",
        price: 3961
    }, {
        name: "Rafaelia",
        price: 1088
    }, {
        name: "Dulcea",
        price: 480
    }, {
        name: "Siward",
        price: 1579
    }, {
        name: "Lauryn",
        price: 4340
    }, {
        name: "Yard",
        price: 4767
    }, {
        name: "Marthena",
        price: 2162
    }, {
        name: "Jimmie",
        price: 966
    }, {
        name: "Eugine",
        price: 2218
    }, {
        name: "Augy",
        price: 397
    }, {
        name: "Gabriel",
        price: 2524
    }, {
        name: "Stevie",
        price: 3222
    }, {
        name: "Helen",
        price: 125
    }, {
        name: "Clementina",
        price: 3178
    }, {
        name: "Lynnelle",
        price: 1223
    }, {
        name: "Lilias",
        price: 4748
    }, {
        name: "Ofilia",
        price: 1275
    }, {
        name: "Bambi",
        price: 3186
    }, {
        name: "Tamqrah",
        price: 1856
    }, {
        name: "Haslett",
        price: 933
    }, {
        name: "Cross",
        price: 2625
    }, {
        name: "Jens",
        price: 368
    }, {
        name: "Sterling",
        price: 755
    }, {
        name: "Allard",
        price: 2040
    }, {
        name: "Fanchon",
        price: 3202
    }, {
        name: "Cherye",
        price: 1296
    }, {
        name: "Frans",
        price: 101
    }, {
        name: "Brina",
        price: 1084
    }, {
        name: "August",
        price: 868
    }, {
        name: "Kirstin",
        price: 1069
    }, {
        name: "Wald",
        price: 3710
    }, {
        name: "Charo",
        price: 1590
    }, {
        name: "Onfroi",
        price: 3955
    }, {
        name: "Sullivan",
        price: 3348
    }, {
        name: "Karil",
        price: 3914
    }, {
        name: "Madelyn",
        price: 4378
    }, {
        name: "Dee",
        price: 4481
    }, {
        name: "Elvin",
        price: 4380
    }, {
        name: "Ruy",
        price: 2310
    }, {
        name: "Lisabeth",
        price: 832
    }, {
        name: "Stanley",
        price: 1432
    }, {
        name: "Armando",
        price: 1691
    }, {
        name: "Kristine",
        price: 835
    }, {
        name: "Rafe",
        price: 2318
    }, {
        name: "Hetti",
        price: 4624
    }
];

export default function ProductFilter() {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(5000);

    const [filteredProducts, setFilteredProducts] = useState([]);

    const filterProducts = () => {
        const filtered = products.filter(product => {
            return product.price >= minPrice && product.price <= maxPrice;
        });

        setFilteredProducts(filtered);
    };

    useEffect(() => {
        setMinPrice(0);
        setMaxPrice(5000);
    }, []);

    return (
        <div>
            <p>Price range: ${minPrice} - ${maxPrice}</p>
            <input
                type="range"
                value={minPrice}
                onChange={e => setMinPrice(e.target.value)}
                min="0"
                max="5000"
            />



            <button
                onClick={filterProducts}
                disabled={minPrice === 0 && maxPrice === 500}
            >
                Apply
            </button>

            <p>{filteredProducts.length} products found</p>

            {filteredProducts.map(product => (
                <div key={product.id}>
                    {product.name} - ${product.price}
                </div>
            ))}
        </div>
    );
}