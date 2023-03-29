<template>
    <div class="login">
        <h1>휴대폰 인증</h1>
        <div class="join-step01">
            <div class="p-fluid">
                <div class="formgrid grid">
                    <div class="field col">
                        <label>휴대폰인증 </label>
                        <InputText type="text" class="p-invalid" />
                        <p class="text-danger">가입을 위해 휴대폰 본인 확인을 해주세요</p>
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <Button label="인증번호 받기 " class="w-full" />
                    </div>
                </div>
                <div class="formgrid grid">
                    <div class="field col">
                        <label>인증번호확인 </label>
                        <InputText type="text" />
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
