import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET() {
  try {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    const formattedOrders = data.map(row => ({
      ...row.order_data,
      id: row.id,
      created_at: row.created_at
    }));

    return NextResponse.json(formattedOrders);
  } catch (error) {
    console.error('Supabase GET Error:', error);
    return NextResponse.json([]);
  }
}

export async function POST(request) {
  try {
    const newOrder = await request.json();
    const id = newOrder.id || Date.now().toString();
    
    const { data, error } = await supabase
      .from('orders')
      .insert([{ id: id, order_data: newOrder }])
      .select();
      
    if (error) throw error;
    
    return NextResponse.json({ success: true, order: data[0] });
  } catch (error) {
    console.error('Supabase POST Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { id } = await request.json();
    
    const { error } = await supabase
      .from('orders')
      .delete()
      .eq('id', id);
      
    if (error) throw error;
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Supabase DELETE Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
