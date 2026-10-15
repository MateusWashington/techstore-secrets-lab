app.get("/health", (req, res) => {
    res.json({
        status: "healthy",
        database: database.host
    });
});


app.get("/config-check", (req, res) => {
    res.json({
        database: database.database,
        adminConfigured: Boolean(process.env.DB_PASSWORD),
        paymentConfigured: Boolean(process.env.PAYMENT_API_KEY),
        internalApiConfigured: Boolean(process.env.INTERNAL_API_TOKEN),
    });
});


app.listen(PORT, () => {
    console.log(`API Techstore is running on port ${PORT}`);
});
