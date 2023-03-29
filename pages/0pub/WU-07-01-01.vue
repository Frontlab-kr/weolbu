<template>
    <div class="event-list">
        <div class="event-list-banner">
            <div class="event-list-banner__badge">
                <Badge value="정규클래스"></Badge>
            </div>
            <div class="event-list-banner__title">더 빨리 오를 곳 여기 입니다.</div>
        </div>

        <div class="event-list-head">
            <div class="event-list-head__title">선착순 50명, 얼리버드 1차 특가</div>
            <Dropdown />
        </div>
        <div class="event-list-body">
            <cardEvent />
            <cardEvent />
            <cardEvent />
            <cardEvent />
            <cardEvent />
            <cardEvent />
        </div>
    </div>
</template>

<script>
import cardEvent from './card-event';
export default {
    components: {
        cardEvent
    }
};
</script>
