<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Buyer;
use App\Models\Order;
use App\Models\Feedback;
use Illuminate\Support\Facades\DB;


class ProductController extends Controller
{
    public function index(){
        $users = Product::all();
        return $users;
        // return view('buyer.index', ['users' => $users]);

    }
    public function add_product(){
        return view('Product.add_product');
    }
    public function added_product(Request $req){
        echo $req->pname;
        echo $req->myfile . "<br>";

        if($req->hasFile('myfile')){
            $file = $req->file('myfile');
            // echo $file->getClientOriginalName() . "<br>";
            // echo $file->getClientOriginalExtension() . "<br>";
            // echo $file->getSize() . "<br>";  // in byte

            $file->move('upload', $file->getClientOriginalName());

            $product_log = new Product();
            $product_log->p_name = $req->pname;
            $product_log->p_price = $req->pprice;
            $product_log->p_quantity = $req->pquantity;
            $product_log->description = $req->pdescription;
            $product_log->image = $file->getClientOriginalName();
            $product_log->save();

            return redirect('/add_product');
        }
    }

    public function show_product($id, Request $req){
        // echo $id;
        $users = DB::table('product')->where('p_id', $id)->get();
        return view('Buyer.select_product', ['users' => $users]);

    }
    public function order_now(Request $req){
        $rules = [
            'quantity' => 'required|numeric|min:1|max:5',
        ];
        $this->validate($req, $rules);

        if($req->p_status == 'Add_To_Cart'){
            echo $req->p_id;
            $data = Order:: find($req->id);
            $data->delete();

            $username = $req->session()->get('username');
            $user = Buyer::where('user_name', $username)->get();


            $forvoucher = DB::table('voucher')->get();



            foreach($user as $u){
                $user = new Order();
                $user->buyer_name = $u['full_name'];
                $user->buyer_username = $u['user_name'];
                $user->buyer_email = $u['email'];
                $user->p_name = $req->p_name;
                $user->p_price = $req->p_price;
                $user->product_quantity = $req->quantity;

                foreach($forvoucher as $f){
                    if($f->code == $req->voucher){
                        if($u['membership'] == 'Premium'){
                            $user->total_price = ($req->quantity * $req->p_price) - ($f->amount*2);
                        }
                        else{
                            $user->total_price = ($req->quantity * $req->p_price) - $f->amount;
                        }
                    }

                    else{
                        $user->total_price = $req->quantity * $req->p_price;
                    }
                }

                $user->status = "Orderd";
                $user->buyer_id = $u['id'];
                $user->image = $req->p_image;
                $user->description = $req->p_description;
                $user->p_id = $req->p_id;
                $user->save();
////////////

                $products = DB::table('product')->where('p_name', $req->p_name)->get();
                foreach($products as $p){

                    $product = DB::table('product')
                    ->where('p_name', $req->p_name)
                    ->update([
                        'sell_quantity' => $p->sell_quantity + $req->quantity
                        ]);
                }
////////////
                // echo "<h1>  Order Successfully Done  </h1>";
                // echo "Name: " . $user->product_name . "<br>";
                // echo "Price: " . $user->product_price . "<br>";
                // echo "Quantity: " . $user->product_quantity . "<br>";
                // echo "Total price: " . $user->total_price . "<br>";
                $req->session()->flash('msg', 'Order Successful');
                return redirect('/abc.com');
            }
        }
        else{
            $username = $req->session()->get('username');
            $user = Buyer::where('user_name', $username)
            ->get();

            $forvoucher = DB::table('voucher')->get();


            foreach($user as $u){
                $user = new Order();
                $user->buyer_name = $u['full_name'];
                $user->buyer_username = $u['user_name'];
                $user->buyer_email = $u['email'];

                $user->p_name = $req->p_name;
                $user->p_price = $req->p_price;
                $user->product_quantity = $req->quantity;

                foreach($forvoucher as $f){
                    if($f->code == $req->voucher){
                        if($u['membership'] == 'Premium'){
                            $user->total_price = ($req->quantity * $req->p_price) - ($f->amount*2);
                        }
                        else{
                            $user->total_price = ($req->quantity * $req->p_price) - $f->amount;
                        }
                    }

                    else{
                        $user->total_price = $req->quantity * $req->p_price;
                    }
                }
                $user->status = "Orderd";
                $user->buyer_id = $u['id'];
                $user->image = $req->p_image;
                $user->description = $req->p_description;
                $user->p_id = $req->p_id;
                $user->save();

////////////
                $products = DB::table('product')->where('p_name', $req->p_name)->get();
                foreach($products as $p){

                    $product = DB::table('product')
                    ->where('p_name', $req->p_name)
                    ->update([
                        'sell_quantity' => $p->sell_quantity + $req->quantity
                        ]);
                }
////////////
                // echo "<h1>  Order Successfully Done  </h1>";
                // echo "Name: " . $user->product_name . "<br>";
                // echo "Price: " . $user->product_price . "<br>";
                // echo "Quantity: " . $user->product_quantity . "<br>";
                // echo "Total price: " . $user->total_price . "<br>";
                $req->session()->flash('msg', 'Order Successful');
                return redirect('/abc.com');
            }

        }
    }

    public function add_to_cart(Request $req){
        $rules = [
            'quantity' => 'required|numeric|min:1|max:5',
        ];
        $this->validate($req, $rules);
        $username = $req->session()->get('username');

        $user = Buyer::where('user_name', $username)
        ->get();

        foreach($user as $u){
            $user = new Order();
            $user->buyer_name = $u['full_name'];
            $user->buyer_username = $u['user_name'];
            $user->buyer_email = $u['email'];

            $user->p_name = $req->p_name;
            $user->p_price = $req->p_price;
            $user->product_quantity = $req->quantity;
            $user->total_price = $req->quantity * $req->p_price;
            $user->status = "Add_To_Cart";
            $user->buyer_id = $u['id'];


            $user->image = $req->p_image;
            $user->description = $req->p_description;
            $user->p_id = $req->p_id;
            $user->save();

            // echo "<h1>  Add_To_Cart Successfully Done  </h1>";
            // echo "Name: " . $user->p_name . "<br>";
            // echo "Price: " . $user->p_price . "<br>";
            // echo "Quantity: " . $user->product_quantity . "<br>";
            // echo "Total price: " . $user->total_price . "<br>";
            $req->session()->flash('msg', 'Product Add In Add To Cart');
            return redirect('/abc.com');
        }
    }

    public function show_cart(Request $req){
        // $username = $req->session()->get('username');

        // $product = Order::where('buyer_username', $username)
        // ->where('status', "Add_to_Cart")
        // ->get();
$product = Order::where('status', "Add_to_Cart")
->get();
return $product;
        // return view('Buyer.show_cart', ['product' => $product]);
    }

    public function cart_delete($id){
        $data = Order:: find($id);
        $data->delete();
        return redirect('/show_cart');
    }

    public function order_from_cart($date, Request $req){
        $username = $req->session()->get('username');
        $product = DB::table('orders')->where('order_date', $date)
        ->where('buyer_username', $username)
        ->get();
        return view('Buyer.select_product', ['users' => $product]);
    }

    public function order_history(Request $req){
        // $username = $req->session()->get('username');
        // $product = Order::where('buyer_username', $username)
        // ->where('status', "Orderd")
        // ->get();
$product = Order::where('status', "Orderd")
->get();
return $product;
        // return view('Buyer.show_order', ['product' => $product]);
    }

    public function wish(Request $req){
        $username = $req->session()->get('username');
        $user = Buyer::where('user_name', $username)
        ->get();

        foreach($user as $u){
            $user = new Order();
            $user->buyer_name = $u['full_name'];
            $user->buyer_username = $u['user_name'];
            $user->buyer_email = $u['email'];

            $user->p_name = $req->p_name;
            $user->p_price = $req->p_price;
            $user->product_quantity = $req->quantity;
            $user->total_price = $req->quantity * $req->p_price;
            $user->wish = "wish";
            $user->buyer_id = $u['id'];

            $user->image = $req->p_image;
            $user->description = $req->p_description;
            $user->p_id = $req->p_id;
            $user->save();

            // echo "<h1>  Wish Successfully Done  </h1>";
            // echo "Name: " . $user->p_name . "<br>";
            // echo "Price: " . $user->p_price . "<br>";
            // echo "Quantity: " . $user->product_quantity . "<br>";
            // echo "Total price: " . $user->total_price . "<br>";

            $users = DB::table('product')->where('p_id', $req->p_id)->get();
            return view('Buyer.select_product', ['users' => $users]);
        }
    }

    public function show_wish(Request $req){
        // $username = $req->session()->get('username');

        // $product = Order::where('buyer_username', $username)
        // ->where('wish', "wish")
        // ->get();
$product = Order::where('wish', "wish")
->get();
return $product;
        // return view('Buyer.show_order', ['product' => $product]);
    }

    public function search_product(Request $req){
        $product = Product::where("p_name", $req->search_product)->get();
        foreach($product as $p){
            if($p->p_name == $req->search_product){
                return view('Buyer.index', ['users' => $product]);
            }
            else{
                echo "p";
            }
        }
        $req->session()->flash('msg', 'Data Not Found..!');
        $product = Product::all();
        return view('buyer.index', ['users' => $product]);
    }

    public function low_to_high_price(){
        $product = Product::orderBy('p_price', 'asc')->get();
        return $product;
        // return view('buyer.index', ['users' => $product]);
    }
    public function high_to_low_price(){
        $product = Product::orderBy('p_price', 'desc')->get();
        return $product;
        // return view('buyer.index', ['users' => $product]);
    }
    public function best_selling_product(){

        $product = Product::orderBy('sell_quantity', 'desc')->get();
        return $product;
        // return view('buyer.index', ['users' => $product]);
    }



    public function ask_question($id){  //product id
        $data = DB::table('user_feedback')
        ->where('product_id', $id)
        ->get();
// print_r($data);
        return view('Buyer.ask_question', ['data' => $data]);
        // return view('Buyer.ask_question', ['id' => $id]);

    }
    public function ask_question_submit(Request $req){
        $user = new Feedback();
        $user->product_id = $req->id;
        $user->ask_question = $req->question;
        $user->save();

        $req->session()->flash('msg', 'Report send succesfull');

        $data = DB::table('user_feedback')
        ->where('product_id', $req->id)
        ->get();

        return view('Buyer.ask_question', ['data' => $data]);
    }




    public function review($id, Request $req){
        $username = $req->session()->get('username');
        $product = DB::table('orders')
        ->where('status', "Orderd")
        ->where('buyer_username', $username)
        ->where('p_id', $id)
        ->get();
        foreach($product as $p){
            if($p->status == "Orderd"){
                $data = DB::table('user_feedback')
                ->where('product_id', $id)
                ->get();
                return view('Buyer.review_product', ['data' => $data]);
            }
            else{
                echo "f";
            }
        }
    }

    public function review_submit(Request $req){
        $user = new Feedback();
        $user->product_id = $req->id;
        $user->review = $req->review;
        $user->save();

        $req->session()->flash('msg', 'Review send succesfull');

        $data = DB::table('user_feedback')
        ->where('product_id', $req->id)
        ->get();

        return view('Buyer.review_product', ['data' => $data]);
    }
}
