import React, { useState } from "react";
import styles from "./simulation.module.scss";

const Simulation = () => {
  const [amount, setAmount] = useState(100000);
  const [days, setDays] = useState(30);
  const interestRate = 0.26; // Ejemplo: 2.75% EA
  const documentCost = 25000; // Tarjeta membresía

  // Función para calcular los costos basados en días
  const calculateCost = (days, costs) => {
    if (days <= 30) return costs[30];
    if (days <= 60) return costs[60];
    if (days <= 90) return costs[90];
    return 0; // Por si supera los 90 días y no se aplica costo
  };

  // Costos según los días
  const guaranteeCost = calculateCost(days, { 30: 42500, 60: 51500, 90: 60000 });
  const electronicSignatureCost = calculateCost(days, { 30: 43500, 60: 87000, 90: 130500 });

  const interest = (amount * interestRate * (days / 365)).toFixed(2);
  const total = (
    parseFloat(amount) +
    parseFloat(interest) +
    guaranteeCost +
    electronicSignatureCost +
    documentCost
  ).toFixed(2);

  const formatCurrency = (value) => {
    return parseInt(value).toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  };

  return (
    <div className={styles.main}>
      <div className={styles.simulation}>
        <div className={styles.simulation__form}>
          <h2>CALCULA TU CRÉDITO ONLINE</h2>
          <div className={styles.simulation__input}>
            <label>¿Cuánto dinero necesitas?</label>
            <input
              type="range"
              min="100000"
              max="1000000"
              step="100000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <div className={styles.amount}>
              <div>
                <span>$100 000</span>
              </div>
              <div className={styles.simulation__amountDisplay}>
                <span>{formatCurrency(amount)}</span>
              </div>
            </div>
          </div>
          <div className={styles.simulation__input}>
            <label>¿Cuándo puedes pagarlo?</label>
            <input
              type="range"
              min="30"
              max="90"
              step="30"
              value={days}
              onChange={(e) => setDays(e.target.value)}
            />
            <div className={styles.days}>
              <div>
                <span>30 Días</span>
              </div>
              <div className={styles.simulation__daysDisplay}>
                <span>{days} Días</span>
              </div>
            </div>
          </div>
          <hr />
          <div className={styles.simulation__result}>
            <div className={styles.total}>
              <div>
                <span className={styles.totalText}>Total a pagar: </span>
              </div>
              <div>
                <span className={styles.totalNumber}>{formatCurrency(total)}</span>
              </div>
            </div>
            <p className={styles.note}>
              Este valor corresponde a una simulación de tu credito segun los
              datos seleccionados por ti. Recuerda que el{" "}
              <strong>Aval y la firma electrónica son opcionales</strong> y
              puedes elegir no incluirlos al momento de firmar tu crédito.
              <a href="/#"> Más información aquí</a>
            </p>
          </div>
          <a href="https://trabajadores.crediplus.com.co/" className={styles.requestNow} target="_blank">Solicítalo Ya</a>
        </div>

        <div className={styles.simulation__costs}>
          <h5>Costos Fijos</h5>
          <div className={styles.simulation__costItem}>
            <div><span>Monto solicitado</span></div>
            <div><span>{formatCurrency(amount)}</span></div>
          </div>
          <div className={styles.simulation__costItem}>
            <span>Intereses Corrientes ({interestRate * 100}% EA)</span>
            <span>{formatCurrency(interest)}</span>
          </div>

          <h5 className={styles.optionalCosts}>Costos Opcionales</h5>
          <div className={styles.simulation__costItem}>
            <span>Aval</span>
            <span>{formatCurrency(guaranteeCost)}</span>
          </div>
          <div className={styles.simulation__costItem}>
            <span>Firma Electrónica</span>
            <span>{formatCurrency(electronicSignatureCost)}</span>
          </div>

          <div className={styles.simulation__costItem}>
            <span>Tarjeta de Membresía</span>
            <span>{formatCurrency(documentCost)}</span>
          </div>

          <div
            className={`${styles.simulation__costItem} ${styles.simulation__total}`}
          >
            <h5>Total</h5>
            <h5>{formatCurrency(total)}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
