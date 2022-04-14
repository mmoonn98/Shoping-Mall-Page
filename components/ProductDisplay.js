Vue.component('product-display', {
    data : function() {
        return {
            brand : 'LG',
            product : '마스크',
            pay : 15000,
            // 상세 설명
            details : [
                '폴리프로필렌 부직포',
                '플라스틱(코편)', 
                '나일론끈'
            ],
            // 상품의 종류 - 배열안에 색, 이미지, 재고 
            // 1. 상품의 종류 추가해보기
            variants : [
                {color : 'white', image :"./images/mask_white.jpg", stock :10},
                {color : 'black', image :"./images/mask_black.jpg", stock : 0}
            ],
            // 선택한 상품
            selction : 0,
        }
    },
    methods : {
        // 선택한 상품을 index로 받아와서 수정
        updateVariant : function(index) {
            this.selction = index;
        }
    },
    computed : {
        title : function() {
            return this.brand+" "+this.product;
        },
        image : function() {
            // 배열의 이미지값을 들고오기위함
            // selction을 이용하여 선택한 상품의 인덱스를 받아옴
            return this.variants[this.selction].image
        },
        isStock : function() {
            //배열의 재고의 값을 들고오기위함
            return this.variants[this.selction].stock
        }
    },
    template : `
    <div class="product-display">
        <div class="product-container">
            <!-- 이미지 추가-->
            <div class="product-image">
                <img v-bind:src="image">
            </div>

            <!-- 상품설명 -->
            <div class="product-info">
                <h1> {{title}} </h1>
                <p v-if="isStock"> 재고가 남아있습니다 </p>
                <p v-else> 재고가 없습니다 </p>

                <p>금액 : {{pay}}</p>

                <!-- 상품 세부설명 -->
                <ul>
                    <!-- 배열로 들고와서 출력 -->
                    <li v-for="detail in details "> {{detail}} </li>
                </ul>

                <!-- 색상 바꾸기 -->
                <!-- 값을 두개 들고오면 뒤에 오는 값은 배열의 인덱스값 -->
                <!-- 배열의 인덱스 값을 메소드의 인자로 전달(선택한 상품) -->
                <div 
                    class="color-circle"
                    v-for="(variant, index) in variants"
                    v-bind:style="{ backgroundColor: variant.color }"
                    v-on:mouseover="updateVariant(index)"
                    >
                </div>

                <!-- 버튼 -->
                <button 
                    class="button"
                    v-bind:class = "{ disabledButton : !isStock }">
                    장바구니에 추가
                </button>
            </div>
        </div>
    </div>
    `
})