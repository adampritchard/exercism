import java.util.concurrent.atomic.AtomicLong

class BankAccount {
    val balance: Long
        get() {
            assertAccountOpen()
            return _balance.get()
        }

    private var _balance = AtomicLong(0)
    private var isClosed = false

    fun adjustBalance(amount: Long) {
        assertAccountOpen()
        _balance.addAndGet(amount)
    }

    fun close() {
        isClosed = true
    }

    private fun assertAccountOpen() {
        if (isClosed) {
            throw IllegalStateException()
        }
    }
}
