use crate::{config::contracts::PasskeyContracts, utils::deployment_utils};
use alloy::primitives::Address;
use eyre::eyre;

pub fn parse_address(address: &str) -> eyre::Result<Address> {
    address.parse::<Address>().map_err(|e| eyre!("Invalid address: {}", e))
}

pub async fn deploy_contracts(
    node_url: url::Url,
) -> eyre::Result<PasskeyContracts> {
    let contracts = deployment_utils::deploy_contracts(node_url).await?;
    Ok(contracts)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_parse_address() {
        let addr = "0x7e1da98cb433d253a6faf30895fa4a389ef6b182";
        assert!(parse_address(addr).is_ok());

        let invalid = "0x1234";
        assert!(parse_address(invalid).is_err());

        let invalid = "0xghijk";
        assert!(parse_address(invalid).is_err());
    }
}
