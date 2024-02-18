class BankAccount {
    var balance: Long = 0
        get() {
            assertAccountOpen()
            return field
        }
        private set

    private var isOpen = true

    @Synchronized
    fun adjustBalance(amount: Long) {
        assertAccountOpen()
        balance += amount
    }

    fun close() {
        isOpen = false
    }

    private fun assertAccountOpen() {
        if (!isOpen) throw IllegalStateException()
    }
}
