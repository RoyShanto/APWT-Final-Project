<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- /////////////////// -->
<style>
.dropbtn {
  background-color: #ffffff;
  color: #070707;
  padding: 10px;
  font-size: 15px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f6f6f6;
  min-width: 160px;
  overflow: auto;
  border: 1px solid #ddd;
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 6px 5px;
  text-decoration: none;
  display: block;
}
a{
    text-decoration: none;
}

.dropdown a:hover {background-color: #ddd;}

.show {display: block;}
</style>
<!-- /////////////////// -->
    <title>Document</title>
</head>
<body>
    <h1>Review Product</h1>
    <a href="/abc.com">Home</a> &nbsp;&nbsp;&nbsp;
    <a href="/profile/{{session('username')}}">My Profile</a> &nbsp;&nbsp;&nbsp;
    <a href="/show_cart">Add To Cart</a>&nbsp;&nbsp;&nbsp;
    <a href="/show_wish">Wish List</a>&nbsp;&nbsp;&nbsp;
    <a href="/order_history">Order History</a>&nbsp;&nbsp;&nbsp;
    <a href="/contact_us">Contact Us</a>&nbsp;&nbsp;&nbsp;
    <!-- /////////////////// -->
<div class="dropdown">
  <button onclick="myFunction()" class="dropbtn">Filter</button>
  <div id="myDropdown" class="dropdown-content">
    <!-- <input type="text" placeholder="Search.." id="myInput" onkeyup="filterFunction()"> -->
    <a href="/best_selling_product">Best Selling Product</a>
    <a href="/low_to_high_price">Low To High Price</a>
    <a href="/high_to_low_price">High To Low Price</a>
  </div>
</div>
<!-- /////////////////// -->
    <a href="/logout">Logout</a><br><br>
    <table border="1">
        <tr>
            <th>Review</th>
        </tr>
        @foreach($data as $d)
        <tr>
            <td>{{$d->review}}</td>
        </tr>
        @endforeach
    </table>

    <form action="" method="post">
    @csrf
    My Review:<br>
    <textarea name="review" cols="50" rows="3"></textarea><br>
    <input type="submit" value="Submit">


    </form>
<!-- /////////////////////////////// -->
<script>
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function filterFunction() {
  var input, filter, ul, li, a, i;
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
</script>
<!-- /////////////////////////////// -->
</body>
</html>
