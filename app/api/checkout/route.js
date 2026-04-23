import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: { name: "BuffPic Download" },
          unit_amount: 100
        },
        quantity: 1
      }
    ],
    success_url: `${process.env.BASE_URL}/?paid=1`,
    cancel_url: `${process.env.BASE_URL}`
  });

  return NextResponse.json({ url: session.url });
}
