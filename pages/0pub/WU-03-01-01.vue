<template>
    <div class="product-list">
        <div class="product-list-banner">
            <div class="product-list-banner__badge">
                <Badge value="정규클래스"></Badge>
            </div>
            <div class="product-list-banner__title">더 빨리 오를 곳 여기 입니다.</div>
        </div>

        <div class="product-list-head">
            <div class="product-list-head__title">선착순 50명, 얼리버드 1차 특가</div>
            <Dropdown />
        </div>
        <div class="product-list-body">
            <cardProduct />
            <cardProduct />
            <cardProduct />
            <cardProduct />
            <cardProduct />
            <cardProduct />
        </div>
    </div>
</template>

<script>
import cardProduct from './card-product';
export default {
    components: {
        cardProduct
    }
};
</script>
