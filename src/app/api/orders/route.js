import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'orders.json');

// Helper to read orders
const readOrders = () => {
  try {
    if (!fs.existsSync(DATA_PATH)) {
      return [];
    }
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return JSON.parse(data || '[]');
  } catch (error) {
    console.error('Error reading orders:', error);
    return [];
  }
};

// Helper to write orders
const writeOrders = (orders) => {
  try {
    fs.writeFileSync(DATA_PATH, JSON.stringify(orders, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error writing orders:', error);
    return false;
  }
};

export async function GET() {
  const orders = readOrders();
  return NextResponse.json(orders);
}

export async function POST(request) {
  try {
    const newOrder = await request.json();
    const orders = readOrders();
    
    // Add unique ID to order if not present
    const orderWithId = {
      ...newOrder,
      id: newOrder.id || Date.now().toString()
    };
    
    orders.push(orderWithId);
    writeOrders(orders);
    
    return NextResponse.json({ success: true, order: orderWithId });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    let orders = readOrders();
    orders = orders.filter(order => order.id !== id);
    writeOrders(orders);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
