class ReverseString {

    public void reverseString(char[] s) {
        char[] temp = new char[s.length];
        int j = 0;
        for(int i = s.length - 1; i >= 0; i--) {
            temp[j] = s[i];
            j++;
        }
        for(int i = 0; i < s.length; i++) {
            s[i] = temp[i];
        }
    }
    public static void main(String[] args) {

        char[] s = {'h','e','l','l','o'};

        ReverseString obj = new ReverseString();
        obj.reverseString(s);

        System.out.println(s);
    }
}