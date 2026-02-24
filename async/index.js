function placeOrder(callback) {
    console.log("🧾 Order placed");

    // chef preparing food (takes time)
    setTimeout(() => {
        console.log("👨‍🍳 Food is ready");
        callback();
    }, 3000);
}

function serveFood() {
    console.log("🍽️ Server brings the food");
}

// place order
placeOrder(serveFood);

// do other things while waiting
console.log("📱 Sitting and scrolling phone...");
console.log("💬 Talking with friends...");