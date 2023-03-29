<template>
    <Card>
        <template #header>
            <div>
                <Badge value="BEST" severity="warning"></Badge>
                <Badge value="NEW"></Badge>
            </div>
            <img alt="user header" src="/images/usercard.png" />
        </template>
        <template #title> Advanced Card </template>
        <template #subtitle> Card subtitle </template>
        <template #content>
            <p>너나위님의 저평가 아파트 투자법, 실전 꿀팁까지!</p>
        </template>
        <template #footer>
            <span>37%</span>
            <span>49,000원</span>
        </template>
    </Card>
</template>
