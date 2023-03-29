<template>
    <div class="login">
        <h1>추가정보</h1>
        <div class="join-step01">
            <div class="p-fluid">
                <div class="formgrid grid">
                    <div class="field col">
                        <label>닉네임 </label>
                        <InputText type="text" class="p-invalid" />
                        <p class="text-danger">네이버 ‘월급쟁이부자들’ 카페에 가입하면 다양한 재테크 정보를 얻을 수 있습니다</p>
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label>성별 </label>
                        <SelectButton v-model="value" :options="options" aria-labelledby="basic" />
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label>생년월일 </label>
                        <Dropdown class="w-full" />
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label>가입경로 </label>
                        <div class="flex align-items-center">
                            <RadioButton />
                            <label>광고</label>
                        </div>
                        <div class="flex align-items-center">
                            <RadioButton />
                            <label>인터넷</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="login__btn">
            <Button label="취소" severity="secondary" outlined />
            <Button label="다음" />
        </div>
    </div>
</template>

<script setup>
const value = ref('남');
const options = ref(['남', '여']);
</script>
