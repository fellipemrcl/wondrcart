const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  try {
    const mousesCategory = await prisma.category.create({
      data: {
        name: "Mouses",
        slug: "mouses",
        imageUrl: "https://i.ibb.co/B6QrrGT/mouses-category.png",
      },
    });

    const mouses = [
      {
        name: "Redragon Tiger 2 M709",
        slug: "redragon-tiger-2-m709",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/pdqHSBY/01-redragon-tiger-2-m709.png",
          "https://i.ibb.co/8mk5sPb/02-redragon-tiger-2-m709.png",
          "https://i.ibb.co/s1YG3dm/03-redragon-tiger-2-m709.png",
          "https://i.ibb.co/ZVG68KW/04-redragon-tiger-2-m709.png",
        ],
        basePrice: 94,
        categoryId: mousesCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Redragon Brancoala B703",
        slug: "redragon-brancoala-b703",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/c3sxhGj/01-redragon-brancoala-b703.png",
          "https://i.ibb.co/gTgCMY4/02-redragon-brancoala-b703.png",
          "https://i.ibb.co/44KYBwB/03-redragon-brancoala-b703.png",
          "https://i.ibb.co/MMP5kPW/04-redragon-brancoala-b703.png",
        ],
        basePrice: 118.99,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Redragon Inquisitor Basic M608",
        slug: "redragon-inquisitor-basic-m608",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/SJbhrpN/01-redragon-inquisitor-basic-m608.png",
          "https://i.ibb.co/SrCn0dt/02-redragon-inquisitor-basic-m608.png",
          "https://i.ibb.co/XxPn5c9/03-redragon-inquisitor-basic-m608.png",
          "https://i.ibb.co/74dxcbj/04-redragon-inquisitor-basic-m608.png",
        ],
        basePrice: 79.99,
        categoryId: mousesCategory.id,
        discountPercentage: 5,
      },
      {
        name: "Redragon Storm RGB",
        slug: "redragon-storm-rgb",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/D9QxX0Z/01-redragon-storm-rgb-rosa-com-branco.png",
          "https://i.ibb.co/wBskFg9/02-redragon-storm-rgb-rosa-com-branco.png",
          "https://i.ibb.co/k5Kkt2n/03-redragon-storm-rgb-rosa-com-branco.png",
          "https://i.ibb.co/CPNmzKb/04-redragon-storm-rgb-rosa-com-branco.png",
        ],
        basePrice: 136.99,
        categoryId: mousesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Logitech G Pro X Superlight 2",
        slug: "logitech-g-pro-x-superlight-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/q9kb5KN/01-logitech-g-pro-x-superlight-2-magenta.png",
          "https://i.ibb.co/0XvQTM4/02-logitech-g-pro-x-superlight-2-magenta.png",
          "https://i.ibb.co/w4SBk0q/03-logitech-g-pro-x-superlight-2-magenta.png",
          "https://i.ibb.co/HC8KYMK/04-logitech-g-pro-x-superlight-2-magenta.png",
        ],
        basePrice: 809.91,
        categoryId: mousesCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Logitech G502 Lightspeed",
        slug: "logitech-g502-lightspeed",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/zHCqgMS/01-logitech-g502-lightspeed.png",
          "https://i.ibb.co/R40pphz/02-logitech-g502-lightspeed.png",
          "https://i.ibb.co/FHM0p9c/03-logitech-g502-lightspeed.png",
          "https://i.ibb.co/rdFS3FK/04-logitech-g502-lightspeed.png",
        ],
        basePrice: 809.91,
        categoryId: mousesCategory.id,
        discountPercentage: 20,
      },
    ];

    await prisma.product.createMany({
      data: mouses,
    });

    const keyboardsCategory = await prisma.category.create({
      data: {
        name: "Teclados",
        slug: "keyboards",
        imageUrl: "https://i.ibb.co/183ZNQ9/keyboards-category.png",
      },
    });

    const keyboards = [
      {
        name: "Logitech G512 Carbon",
        slug: "logitech-g512-carbon",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/0Xgp1sb/01-logitech-g512-carbon.png",
          "https://i.ibb.co/dD9pMFV/02-logitech-g512-carbon.png",
          "https://i.ibb.co/TK7cfbY/03-logitech-g512-carbon.png",
        ],
        basePrice: 759.90,
        categoryId: keyboardsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Logitech G PRO X - Edição Shroud",
        slug: "logitech-g-pro-x-edicao-shroud",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/1QLGnWK/01-logitech-g-pro-wireless-shroud.png",
          "https://i.ibb.co/7NJwjhH/02-logitech-teclado-shroud02.png",
        ],
        basePrice: 899.91,
        categoryId: keyboardsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Logitech G915 TKL",
        slug: "logitech-g915-tkl",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/9t92JMc/01-logitech-g-915.png",
          "https://i.ibb.co/DWdMdFG/02-logitech-g-915.png",
          "https://i.ibb.co/p4G2rFN/03-logitech-g-915.png",
          "https://i.ibb.co/W3ZmKnf/04-logitech-g-915.png",
        ],
        basePrice: 1169.91,
        categoryId: keyboardsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Logitech G213",
        slug: "logitech-g213",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/ZzydXGz/01-logitech-g213.png",
          "https://i.ibb.co/qxS18R8/02-logitech-g213.png",
          "https://i.ibb.co/3TTDwXJ/03-logitech-g213.png",
          "https://i.ibb.co/5kwXJs0/04-logitech-g213.png",
        ],
        basePrice: 449.91,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Logitech G G815 Tactile",
        slug: "logitech-g-g815-tactile",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/0qrt6Dx/01-logitech-g-815-tactile.png",
          "https://i.ibb.co/fxCXT5H/02-logitech-g-815-tactile.png",
          "https://i.ibb.co/Bff4nx2/03-logitech-g-815-tactile.png",
        ],
        basePrice: 989.91,
        categoryId: keyboardsCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: keyboards,
    });

    const headphonesCategory = await prisma.category.create({
      data: {
        name: "Fones",
        slug: "headphones",
        imageUrl: "https://i.ibb.co/tZF8mss/headset-category.png",
      },
    });

    const headphones = [
      {
        name: "Headset Gamer Sem Fio Logitech G435 LIGHTSPEED - Azul",
        slug: "headset-gamer-sem-fio-logitech-g435-lightspeed-azul",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/GHJhwj8/01-logitech-g435-lightspeed.png",
          "https://i.ibb.co/2hCK9ph/02-logitech-g435-lightspeed.png",
          "https://i.ibb.co/tXd04hM/03-logitech-g435-lightspeed.png",
        ],
        basePrice: 629.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Headset Sem Fio Logitech G Astro A30 - Azul - PS",
        slug: "headset-sem-fio-logitech-g-astro-a30-azul-ps",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/3k6Vdm9/01-logitech-g-astro-a30.png",
          "https://i.ibb.co/W26g1kk/02-logitech-g-astro-a30.png",
          "https://i.ibb.co/DY1k1BN/03-logitech-g-astro-a30.png",
        ],
        basePrice: 1799.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Headset Gamer Logitech G PRO X - Edição Oficial League of Legends",
        slug: "headset-gamer-logitech-g-pro-x-edicao-oficial-league-of-legends",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/55gX96V/01-logitech-g-pro-x-edicao-lol.png",
          "https://i.ibb.co/TBGQmFP/02-logitech-g-pro-x-edicao-lol.png",
          "https://i.ibb.co/wY0J2J1/03-logitech-g-pro-x-edicao-lol.png",
        ],
        basePrice: 899.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Headset Com Fio ASTRO A10 Gaming Gen 2 - Cinza - PC",
        slug: "headset-com-fio-astro-a10-gaming-gen-2-cinza-pc",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/GQ5Mw82/01-logitech-astro-a10-gen2.png",
          "https://i.ibb.co/253Kqwc/02-logitech-astro-a10-gen2.png",
          "https://i.ibb.co/zGrd7FK/03-logitech-astro-a10-gen2.png",
        ],
        basePrice: 449.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Headset Gamer Sem Fio Logitech G733 7.1 Dolby Surround - Lilás",
        slug: "headset-gamer-sem-fio-logitech-g733-7-1-dolby-surround-lilas",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/thBgtXN/01-logitech-g733.png",
          "https://i.ibb.co/Jzv5qSQ/02-logitech-g733.png",
          "https://i.ibb.co/nBVvtRZ/03-logitech-g733.png",
        ],
        basePrice: 989.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Headset Gamer Logitech G432 7.1 Dolby Surround - Preto/Azul",
        slug: "headset-gamer-logitech-g432-7-1-dolby-surround-preto-azul",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/QKRYj0N/01-logitech-g432.png",
          "https://i.ibb.co/yWNK3hm/02-logitech-g432.png",
          "https://i.ibb.co/mJ849jF/03-logitech-g432.png",
        ],
        basePrice: 494.91,
        categoryId: headphonesCategory.id,
        discountPercentage: 0,
      },
    ];

    await prisma.product.createMany({
      data: headphones,
    });

    const mousepadsCategory = await prisma.category.create({
      data: {
        name: "Mousepads",
        slug: "mousepads",
        imageUrl: "https://i.ibb.co/7zWy3Mg/mousepad-category.png",
      },
    });

    const mousepads = [
      {
        name: "Mouse Pad Grande De Tecido Logitech G Social Mousepad - Branco",
        slug: "mouse-pad-grande-de-tecido-logitech-g-social-mousepad-branco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/TMFTqnT/01-logitech-mousepad-g-social.png",
          "https://i.ibb.co/YWWcvCW/02-logitech-mousepad-g-social.png",
        ],
        basePrice: 237.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Mouse Pad Extra Grande de Tecido para Jogo Logitech G840 Edição Shroud",
        slug: "mouse-pad-extra-grande-de-tecido-para-jogo-logitech-g840-edicao-shroud",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/L60g74Q/01-logitech-mousepad-g840.png",
          "https://i.ibb.co/GMXfmK9/02-logitech-mousepad-g840.png",
        ],
        basePrice: 287.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Mouse Pad Grande De Tecido Logitech G Social Mousepad - Verde",
        slug: "mouse-pad-grande-de-tecido-logitech-g-social-mousepad-verde",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/zNP15gJ/01-logitech-mousepad-g-social-verde.png",
          "https://i.ibb.co/kBpqdTP/02-logitech-mousepad-g-social-verde.png",
        ],
        basePrice: 237.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Mouse Pad Extra Grande de Tecido Logitech G840 K/DA - Edição Oficial League of Legends KDA",
        slug: "mouse-pad-extra-grande-de-tecido-logitech-g840-k-da-edicao-oficial-league-of-legends-kda",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/y6Mtj4X/01-logitech-mousepad-g840-kda.png",
          "https://i.ibb.co/y6Mtj4X/01-logitech-mousepad-g840-kda.png",
        ],
        basePrice: 397.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 15,
      },
      {
        name: "Mouse Pad Rígido Logitech G440",
        slug: "mouse-pad-rigido-logitech-g440",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/jv4DQbN/01-logitech-mousepad-g440.png",
          "https://i.ibb.co/bN313T5/02-logitech-mousepad-g440.png",
          "https://i.ibb.co/7tzkg54/03-logitech-mousepad-g440.png",
        ],
        basePrice: 100.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Mouse Pad Desk Mat Logitech Studio Series - Cinza",
        slug: "mouse-pad-desk-mat-logitech-studio-series-cinza",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/HzzchCS/01-logitech-mousepad-desk-mat.png",
          "https://i.ibb.co/HzzchCS/01-logitech-mousepad-desk-mat.png",
        ],
        basePrice: 157.91,
        categoryId: mousepadsCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: mousepads,
    });

    const monitorsCategory = await prisma.category.create({
      data: {
        name: "Monitores",
        slug: "monitors",
        imageUrl: "https://i.ibb.co/VBF6ZVb/monitor-category.png",
      },
    });

    const monitors = [
      {
        name: "Monitor Gamer LG 21.5 LED Full HD, 75Hz, 5ms, HDMI, FreeSync - 22MP410-B",
        slug: "monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/dfLrV53/01-monitor-gamer-lg-22-MP410-B.png",
          "https://i.ibb.co/F5Qq2hG/02-monitor-gamer-lg-22-MP410-B.png",
          "https://i.ibb.co/FWVQdnC/03-monitor-gamer-lg-22-MP410-B.png",
          "https://i.ibb.co/XyRVC47/04-monitor-gamer-lg-22-MP410-B.png",
        ],
        basePrice: 419.99,
        categoryId: monitorsCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Monitor Gamer LG UltraGear 27 Full HD, 144Hz, 1ms, IPS, HDMI e DisplayPort, HDR 10, 99% sRGB, FreeSync Premium, VESA - 27GN65R",
        slug: "monitor-gamer-lg-ultragear-27-full-hd-144hz-1ms-ips-hdmi-e-displayport-hdr-10-99-srgb-freesync-premium-vesa-27gn65r",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/2ZbvC7X/01-monitor-gamer-lg-ultra-Gear-27-GN65-R.png",
          "https://i.ibb.co/82PZ7Z3/02-monitor-gamer-lg-ultra-Gear-27-GN65-R.png",
          "https://i.ibb.co/YRPqJ3v/03-monitor-gamer-lg-ultra-Gear-27-GN65-R.png",
          "https://i.ibb.co/bgC8srf/04-monitor-gamer-lg-ultra-Gear-27-GN65-R.png",
        ],
        basePrice: 1059.99,
        categoryId: monitorsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Monitor Gamer Samsung 24' IPS, 75 Hz, Full HD, FreeSync, HDMI - LF24T350FHLMZD",
        slug: "monitor-gamer-samsung-24-ips-75-hz-full-hd-freesync-hdmi-lf24t350fhlmzd",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/029tmyY/01-monitor-gamer-samsung-LF24-T350-FHLMZD.png",
          "https://i.ibb.co/rQrDzpJ/02-monitor-gamer-samsung-LF24-T350-FHLMZD.png",
          "https://i.ibb.co/HVnPDWP/03-monitor-gamer-samsung-LF24-T350-FHLMZD.png",
          "https://i.ibb.co/QvTZynw/04-monitor-gamer-samsung-LF24-T350-FHLMZD.png",
        ],
        basePrice: 699.99,
        categoryId: monitorsCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Monitor Concórdia Gamer Curvo 27', 100hz, Led Full, Hd, HDMI Vga - Cz270f",
        slug: "monitor-concordia-gamer-curvo-27-100hz-led-full-hd-hdmi-vga-cz270f",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/0fpHktd/01-monitor-conc-rdia-Cz270f.png",
          "https://i.ibb.co/5Y5wb7G/02-monitor-conc-rdia-Cz270f.png",
          "https://i.ibb.co/LgL2Y4Z/03-monitor-conc-rdia-Cz270f.png",
          "https://i.ibb.co/Hq3rmmD/04-monitor-conc-rdia-Cz270f.png",
        ],
        basePrice: 702.99,
        categoryId: monitorsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Monitor Gamer AOC 27 Polegadas LED Full HD, 144hz, 1ms, IPS, HDMI, VGA, Display Port, VESA, G-sync - 27g2/bk",
        slug: "monitor-gamer-aoc-27-polegadas-led-full-hd-144hz-1ms-ips-hdmi-vga-display-port-vesa-g-sync-27g2-bk",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/hdgBkvP/01-monitor-gamer-AOC-27-27g2-bk.png",
          "https://i.ibb.co/XzLW7j4/02-monitor-gamer-AOC-27-27g2-bk.png",
          "https://i.ibb.co/DL4CMZR/03-monitor-gamer-AOC-27-27g2-bk.png",
          "https://i.ibb.co/pPR8YjZ/04-monitor-gamer-AOC-27-27g2-bk.png",
        ],
        basePrice: 899.10,
        categoryId: monitorsCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Monitor Gamer Husky 23.8' LED, Wide, 165 Hz, Full HD, 1ms, Adaptive Sync, HDMI/DisplayPort, VESA - HGMT003",
        slug: "monitor-gamer-husky-23-8-led-wide-165-hz-full-hd-1ms-adaptive-sync-hdmi-displayport-vesa-hgmt003",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/BrMDXmC/01-monitor-gamer-husky-HGMT003.png",
          "https://i.ibb.co/JKjMxwN/02-monitor-gamer-husky-HGMT003.png",
          "https://i.ibb.co/9tJWrkh/03-monitor-gamer-husky-HGMT003.png",
          "https://i.ibb.co/6mKM5rz/04-monitor-gamer-husky-HGMT003.png",
        ],
        basePrice: 749.99,
        categoryId: monitorsCategory.id,
        discountPercentage: 10,
      },
    ];

    await prisma.product.createMany({
      data: monitors,
    });

    const speakersCategory = await prisma.category.create({
      data: {
        name: "Speakers",
        slug: "speakers",
        imageUrl: "https://i.ibb.co/4JmhNwp/speakers-category.png",
      },
    });

    const speakers = [
      {
        name: "Caixa Acústica Bookshelf Klipsch Ebony, 85/340W RMS - R-15M",
        slug: "caixa-acustica-bookshelf-klipsch-ebony-85-340w-rms-r-15m",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/rwDGcRm/01-caixa-acustica-bookshelf-klipsch-ebony-85-340w-rms-r-15m.png",
          "https://i.ibb.co/QnLjtyH/02-caixa-acustica-bookshelf-klipsch-ebony-85-340w-rms-r-15m.png",
          "https://i.ibb.co/vqfMRRD/03-caixa-acustica-bookshelf-klipsch-ebony-85-340w-rms-r-15m.png",
          "https://i.ibb.co/wYHt01F/04-caixa-acustica-bookshelf-klipsch-ebony-85-340w-rms-r-15m.png",
        ],
        basePrice: 1399.99,
        categoryId: speakersCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Caixa de Som com Subwoofer Edifier S350DB, Bluetooth, 150W RMS, Madeira",
        slug: "caixa-de-som-com-subwoofer-edifier-s350db-bluetooth-150w-rms-madeira",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/6BX4tyP/01-caixa-de-som-com-subwoofer-edifier-s350db.png",
          "https://i.ibb.co/0JF2xHp/02-caixa-de-som-com-subwoofer-edifier-s350db.png",
          "https://i.ibb.co/b39bPQ9/03-caixa-de-som-com-subwoofer-edifier-s350db.png",
          "https://i.ibb.co/sgQ7NxD/04-caixa-de-som-com-subwoofer-edifier-s350db.png",
        ],
        basePrice: 2299.99,
        categoryId: speakersCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Caixa de Som Hercules DJ Monitor 32, 15W RMS, Preto - 4780962",
        slug: "caixa-de-som-hercules-dj-monitor-32-15w-rms-preto-4780962",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/XZVqrfx/01-caixa-de-som-hercules-dj-monitor.png",
          "https://i.ibb.co/wzp7hkh/02-caixa-de-som-hercules-dj-monitor.png",
          "https://i.ibb.co/F7HnR2Z/03-caixa-de-som-hercules-dj-monitor.png",
        ],
        basePrice: 400.99,
        categoryId: speakersCategory.id,
        discountPercentage: 10,
      },
      {
        name: "Caixa De Som Logitech Z313 Sistema 980-000413 50w - Bivolt",
        slug: "caixa-de-som-logitech-z313-sistema-980-000413-50w-bivolt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/2KGWJhC/01-caixa-de-som-logitech-z313.png",
          "https://i.ibb.co/GxVL0YJ/02-caixa-de-som-logitech-z313.png",
          "https://i.ibb.co/B3PPvRN/03-caixa-de-som-logitech-z313.png",
        ],
        basePrice: 400.99,
        categoryId: speakersCategory.id,
        discountPercentage: 0,
      },
      {
        name: "Caixas De Som JBL, Control 1 Pro, Profissional 2-vias, 150w, 4 Ohms - Branco",
        slug: "caixas-de-som-jbl-control-1-pro-profissional-2-vias-150w-4-ohms-branco",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/SJHcvTy/01-caixas-de-som-jbl-control-1-pro.png",
          "https://i.ibb.co/X7v1fGQ/02-caixas-de-som-jbl-control-1-pro.png",
          "https://i.ibb.co/DKWD1qF/03-caixas-de-som-jbl-control-1-pro.png",
          "https://i.ibb.co/1mzjHQB/04-caixas-de-som-jbl-control-1-pro.png",
        ],
        basePrice: 1603.99,
        categoryId: speakersCategory.id,
        discountPercentage: 20,
      },
      {
        name: "Caixa de Som Portátil Edifier R1080BT, 24W, Bluetooth - R1080 BT",
        slug: "caixa-de-som-portatil-edifier-r1080bt-24w-bluetooth-r1080-bt",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id malesuada elit, eget vulputate justo. Sed sollicitudin velit dolor, ut gravida odio iaculis a.\nNulla risus justo, tempor eu felis eu, efficitur pulvinar risus. Sed viverra, nisi id egestas convallis, massa lorem convallis magna, vel convallis mi turpis nec ante. Maecenas posuere lacus id gravida dignissim. Morbi sit amet rutrum ex. Duis sit amet sem orci. Morbi non nisl sed mauris mattis ullamcorper quis eget metus.\nUt pellentesque ornare erat, vitae blandit ex pulvinar sit amet. Ut pellentesque lorem at eros vestibulum lobortis. Proin bibendum est facilisis nulla tristique vestibulum. Etiam placerat tortor sit amet lacinia volutpat. Curabitur lectus turpis, faucibus vitae tortor in, lacinia tristique neque.",
        imageUrls: [
          "https://i.ibb.co/8rzS8GC/01-caixa-de-som-portatil-edifier-r1080bt.png",
          "https://i.ibb.co/b6dKB4G/02-caixa-de-som-portatil-edifier-r1080bt.png",
          "https://i.ibb.co/W63Jj6H/03-caixa-de-som-portatil-edifier-r1080bt.png",
        ],
        basePrice: 719.99,
        categoryId: speakersCategory.id,
        discountPercentage: 20,
      },
    ];

    await prisma.product.createMany({
      data: speakers,
    });

    console.log("Seed completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
