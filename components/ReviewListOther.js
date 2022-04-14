Vue.component('review-list-other',{
    template : `
    <div class="review-container">
    <h3>Reviews:</h3>
        <ul>
            <li>
            <slot name="name"></slot>님이 <slot name="rating"></slot> 별점을 주었습니다
            <br/>
            "<slot name='review'></slot>"
            <br/>

            추천: <slot name="recommend"></slot>

            </li>
        </ul>
    </div>
    `
})