import { Sql } from 'postgres';

const hotels = [
  {
    id: 1,
    hotelName: 'Monteverde Country Lodge',
    description:
      'Monteverde Country Lodge is a quiet, comfortable hotel located near the Ecological Sanctuary and the Monteverde Butterfly Gardens in an area called Cerro Plano, an ideal location half way between the Monteverde Cloud Forest reserve and the main village of the Monteverde area (Santa Elena), in close proximity to several restaurants and activities. All rooms have private bathrooms with hot water.',
    address: 'Monteverde/Costa Rica',
    rating: 4,
    pricePerNight: 120,
  },
  {
    id: 2,
    hotelName: 'Ibis Wembley',
    description:
      "Ibis London Wembley hotel is in close proximity to Wembley Stadium and Wembley Arena, both just a few minutes' walk from the hotel. Each of the 210 modern guest rooms have wireless internet and satellite TV. The hotel has excellent local transport connections into central London.",
    address: 'London/England',
    rating: 4,
    pricePerNight: 240,
  },
  {
    id: 3,
    hotelName: 'Sandman Longueuil',
    description:
      "The Sandman Longueuil hotel has easy access to many of the city's top attractions, including the Casino, Old Montreal, La Ronde and Montreal's underground city. Cozy guest rooms with panoramic views allow you to unwind, and an indoor pool and sauna ensure that your stay is filled with ease. Whether you're on the go, or in town to check out all the charming sights and sounds, Sandman Longueuil is always an impressive treat.",
    address: 'Montréal/Canada',
    rating: 3,
    pricePerNight: 160,
  },
  {
    id: 4,
    hotelName: 'Hotel Ibis La Défense Centre',
    description:
      'In the heart of the La Défense business district, the ibis Paris La Défense Centre hotel is ideally situated between the Grande Arche and the Arc de Triomphe. The hotel boasts a restaurant, bar and 286 air-conditioned rooms with free Wi-Fi access. The nearby Esplanade de la Défense metro station (line 1), provides easy access to the Porte Maillot convention center, the Champs Elysées and even the 4 Temps shopping mall within 10 minutes.',
    address: 'Paris/France',
    rating: 4,
    pricePerNight: 220,
  },
  {
    id: 5,
    hotelName: 'Kyriad Nice Port',
    description:
      'This hotel sits in central Nice, just 1,150 feet from the ferry port and a 20-minute walk from the Promenade des Anglais. Its rooms are air-conditioned with free Wi-Fi access. The guest rooms at the Kyriad Nice Port are equipped with flat-screen TVs with satellite channels and a private bathroom. Each is serviced by a lift. The Kyriad Hotel Nice Port has a 24-hour reception, which is hosted by a multilingual team. The hotel serves a buffet breakfast every morning. ',
    address: 'Nice/France',
    rating: 4,
    pricePerNight: 260,
  },
  {
    id: 6,
    hotelName: 'Comfort Hotel Lichtenberg',
    description:
      'The Comfort Hotel Lichtenberg is located in the northeast part of Berlin, opposite the Die Pyramide building, featuring the highest clock in Europe. The hotel offers 120 comfortably furnished guest rooms. All rooms have cable TV and wireless internet access. All standard guest rooms are equipped with private bathrooms, hair dryers, spacious work desks, direct-dial telephones and satellite television. This is a non-smoking hotel. The distinguishing mark of the Comfort Hotel Lichtenberg is to be able to stay overnight at reasonable rates. For an excellent lodging experience, we cordially invite you to stay with us the next time you are in Berlin.',
    address: 'Berlin/Germany',
    rating: 3,
    pricePerNight: 130,
  },
  {
    id: 7,
    hotelName: 'Hotel Titania',
    description:
      "The Athens Hotel Titania is located in the heart of the Historical and Commercial Center of Athens and has recently been renovated. It's surrounded by the most important monuments of the Grecian History, such as the Acropolis, the New Museum of Acropolis, the Parliament, the Archaeological Museum, and the National Library. It's located within short distance to theaters, modern commercial shops and city malls, offering its guests a wide variety of sightseeing and entertainment choices. Hotel Titania is a unique Athens Hotel which guarantees its guests an unforgettable stay.",
    address: 'Athens/Greece',
    rating: 4,
    pricePerNight: 90,
  },
  {
    id: 8,
    hotelName: 'Hotel Drei Könige Luzern',
    description:
      'Hotel Drei Könige is a comfortable and welcoming hotel located in Lucerne, close to the town hall. The hotel offers 50 rooms each with a television, radio, hair dryer, private bathroom, Wi-Fi, safe and telephone. It also has a restaurant which offers vegetarian meals, a lunchroom, and terrace.',
    address: 'Lucerne/Switzerland',
    rating: 5,
    pricePerNight: 280,
  },
];

export async function up(sql: Sql) {
  for (const hotel of hotels) {
    await sql`
      INSERT INTO
        hotels (
          hotel_name,
          description,
          address,
          rating,
          price_per_night
        )
      VALUES
        (
          ${hotel.hotelName},
          ${hotel.description},
          ${hotel.address},
          ${hotel.rating},
          ${hotel.pricePerNight}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const hotel of hotels) {
    await sql`
      DELETE FROM hotels
      WHERE
        id = ${hotel.id}
    `;
  }
}
